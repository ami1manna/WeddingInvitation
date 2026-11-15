#!/usr/bin/env python3
"""
Bake night scene assets offline:
Applies CSS filters, drop-shadows, gradient masks, and right-sizes oversized artwork.
Bakes them directly to WebP so the browser's GPU never has to filter large images per frame.
"""

import os
import numpy as np
from PIL import Image, ImageFilter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
ASSETS_DIR = os.path.join(PROJECT_ROOT, 'assets')
DAYTIME_DIR = os.path.join(ASSETS_DIR, 'daytime')
REALISTIC_DIR = os.path.join(ASSETS_DIR, 'realistic')
OUT_DIR = os.path.join(ASSETS_DIR, 'night')

os.makedirs(OUT_DIR, exist_ok=True)

def load_rgba(path):
    im = Image.open(path).convert('RGBA')
    return np.array(im, dtype=np.float32) / 255.0

def save_webp(arr, out_name, quality=88):
    arr = np.clip(arr, 0.0, 1.0)
    im = Image.fromarray((arr * 255.0 + 0.5).astype(np.uint8), mode='RGBA')
    out_path = os.path.join(OUT_DIR, out_name)
    im.save(out_path, format='WEBP', quality=quality, method=6)
    size_kb = os.path.getsize(out_path) / 1024.0
    print(f"Saved {out_name}: {im.size[0]}x{im.size[1]}, {size_kb:.1f} KB")
    return size_kb

def apply_color_filters(arr, brightness=1.0, contrast=1.0, saturate=1.0, hue_rotate_deg=0.0):
    rgb = arr[..., :3].copy()
    alpha = arr[..., 3:].copy()

    # 1. Brightness: C' = C * b
    if brightness != 1.0:
        rgb = rgb * brightness

    # 2. Contrast: C' = (C - 0.5) * c + 0.5
    if contrast != 1.0:
        rgb = (rgb - 0.5) * contrast + 0.5

    # 3. Saturate: standard Rec.709 luma
    if saturate != 1.0:
        luma = rgb[..., 0] * 0.2126 + rgb[..., 1] * 0.7152 + rgb[..., 2] * 0.0722
        rgb = luma[..., None] + (rgb - luma[..., None]) * saturate

    # 4. Hue-rotate
    if hue_rotate_deg != 0.0:
        rad = np.radians(hue_rotate_deg)
        c = np.cos(rad)
        s = np.sin(rad)
        m = np.array([
            [0.213 + c*0.787 - s*0.213, 0.715 - c*0.715 - s*0.715, 0.072 - c*0.072 + s*0.928],
            [0.213 - c*0.213 + s*0.143, 0.715 + c*0.285 + s*0.140, 0.072 - c*0.072 - s*0.283],
            [0.213 - c*0.213 - s*0.787, 0.715 - c*0.715 + s*0.715, 0.072 + c*0.928 + s*0.072]
        ], dtype=np.float32)
        rgb = rgb @ m.T

    rgb = np.clip(rgb, 0.0, 1.0)
    return np.concatenate([rgb, alpha], axis=-1)

def apply_drop_shadow(rgba, dx, dy, blur, shadow_color):
    """
    shadow_color is (r, g, b, a) in [0, 1]
    dx, dy are offsets in pixels
    blur is CSS blur radius (sigma = blur / 2)
    """
    sr, sg, sb, sa = shadow_color
    h, w = rgba.shape[:2]
    alpha = rgba[..., 3]

    im_a = Image.fromarray((alpha * 255.0 + 0.5).astype(np.uint8), mode='L')
    im_shift = Image.new('L', (w, h), 0)
    im_shift.paste(im_a, (int(round(dx)), int(round(dy))))

    if blur > 0:
        im_blur = im_shift.filter(ImageFilter.GaussianBlur(radius=blur / 2.0))
    else:
        im_blur = im_shift

    s_alpha = np.array(im_blur, dtype=np.float32) / 255.0 * sa
    s_alpha = s_alpha[..., None]

    img_a = alpha[..., None]
    img_rgb = rgba[..., :3]

    out_a = img_a + s_alpha * (1.0 - img_a)
    shadow_rgb = np.array([sr, sg, sb], dtype=np.float32)
    out_rgb = (img_rgb * img_a + shadow_rgb * s_alpha * (1.0 - img_a)) / np.maximum(out_a, 1e-6)

    out_a = np.clip(out_a, 0.0, 1.0)
    out_rgb = np.clip(out_rgb, 0.0, 1.0)
    return np.concatenate([out_rgb, out_a], axis=-1)

def apply_vertical_mask(rgba, stops):
    """
    stops is list of (y_frac, alpha_factor) sorted by y_frac.
    Linearly interpolates alpha between stops.
    """
    h = rgba.shape[0]
    ys = np.linspace(0.0, 1.0, h, dtype=np.float32)
    factors = np.zeros(h, dtype=np.float32)

    for i in range(len(stops) - 1):
        y0, a0 = stops[i]
        y1, a1 = stops[i + 1]
        mask = (ys >= y0) & (ys <= y1)
        if y1 > y0:
            factors[mask] = a0 + (a1 - a0) * ((ys[mask] - y0) / (y1 - y0))
        else:
            factors[mask] = a1

    factors[ys < stops[0][0]] = stops[0][1]
    factors[ys > stops[-1][0]] = stops[-1][1]

    rgba = rgba.copy()
    rgba[..., 3] = rgba[..., 3] * factors[:, None]
    return rgba

def resize_rgba(rgba, target_w, target_h):
    im = Image.fromarray((rgba * 255.0 + 0.5).astype(np.uint8), mode='RGBA')
    im_resized = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
    return np.array(im_resized, dtype=np.float32) / 255.0

def bake_all():
    total_kb = 0.0

    print("--- Baking Night Assets ---")

    # 1. Sky: B01_sky.jpg
    sky_im = Image.open(os.path.join(DAYTIME_DIR, 'B01_sky.jpg')).convert('RGB')
    sky_arr = np.array(sky_im, dtype=np.float32) / 255.0
    sky_rgba = np.concatenate([sky_arr, np.ones((sky_arr.shape[0], sky_arr.shape[1], 1), dtype=np.float32)], axis=-1)
    total_kb += save_webp(sky_rgba, 'sky.webp', quality=90)

    # 2. Clouds: B02_clouds.png
    # filter: brightness(0.24) contrast(1.22) saturate(0.85) hue-rotate(-24deg) drop-shadow(0 0 16px rgba(10, 5, 22, 0.7))
    # mask: linear-gradient(to bottom, transparent 0%, #000 24%, #000 76%, transparent 100%)
    clouds = load_rgba(os.path.join(DAYTIME_DIR, 'B02_clouds.png'))
    clouds = apply_color_filters(clouds, brightness=0.24, contrast=1.22, saturate=0.85, hue_rotate_deg=-24.0)
    clouds = apply_vertical_mask(clouds, [(0.0, 0.0), (0.24, 1.0), (0.76, 1.0), (1.0, 0.0)])
    clouds = apply_drop_shadow(clouds, 0, 0, 16, (10/255.0, 5/255.0, 22/255.0, 0.7))
    total_kb += save_webp(clouds, 'clouds.webp', quality=85)

    # 3. Birds: B03_birds.png
    # Right-size: 1774x887 -> 887x444 (birds are tiny distant silhouettes)
    # filter: brightness(0.18) contrast(1.4)
    birds = load_rgba(os.path.join(DAYTIME_DIR, 'B03_birds.png'))
    birds = resize_rgba(birds, 887, 444)
    birds = apply_color_filters(birds, brightness=0.18, contrast=1.4)
    total_kb += save_webp(birds, 'birds.webp', quality=88)

    # 4. Trees: B07_left_trees.png, B08_right_trees.png
    # mask: linear-gradient(to bottom, transparent 0%, #000 8%)
    # filter: brightness(0.40) contrast(1.18) saturate(0.85) hue-rotate(-18deg) drop-shadow(0 15px 35px rgba(4, 6, 15, 0.85))
    for name, fn in [('trees_left.webp', 'B07_left_trees.png'), ('trees_right.webp', 'B08_right_trees.png')]:
        trees = load_rgba(os.path.join(DAYTIME_DIR, fn))
        trees = apply_color_filters(trees, brightness=0.40, contrast=1.18, saturate=0.85, hue_rotate_deg=-18.0)
        trees = apply_vertical_mask(trees, [(0.0, 0.0), (0.08, 1.0), (1.0, 1.0)])
        trees = apply_drop_shadow(trees, 0, 15, 35, (4/255.0, 6/255.0, 15/255.0, 0.85))
        total_kb += save_webp(trees, name, quality=88)

    # 5. Branches: B04_left_branches.png, B05_right_branches.png
    # filter: brightness(0.72) contrast(1.14) saturate(0.96) drop-shadow(0 10px 22px rgba(12, 4, 18, 0.8))
    for name, fn in [('branches_left.webp', 'B04_left_branches.png'), ('branches_right.webp', 'B05_right_branches.png')]:
        branches = load_rgba(os.path.join(DAYTIME_DIR, fn))
        branches = apply_color_filters(branches, brightness=0.72, contrast=1.14, saturate=0.96)
        branches = apply_drop_shadow(branches, 0, 10, 22, (12/255.0, 4/255.0, 18/255.0, 0.8))
        total_kb += save_webp(branches, name, quality=88)

    # 6. Mandap: B06_mandap.png
    # filter: brightness(0.92) contrast(1.15) saturate(1.12) drop-shadow(0 0 35px rgba(255, 185, 75, 0.45)) drop-shadow(0 18px 36px rgba(10, 4, 18, 0.85))
    mandap = load_rgba(os.path.join(DAYTIME_DIR, 'B06_mandap.png'))
    mandap = apply_color_filters(mandap, brightness=0.92, contrast=1.15, saturate=1.12)
    # Apply warm golden halo drop-shadow first
    mandap = apply_drop_shadow(mandap, 0, 0, 35, (255/255.0, 185/255.0, 75/255.0, 0.45))
    # Apply ambient floor drop-shadow second
    mandap = apply_drop_shadow(mandap, 0, 18, 36, (10/255.0, 4/255.0, 18/255.0, 0.85))
    total_kb += save_webp(mandap, 'mandap.webp', quality=90)

    # 7. Foreground Garden: B09_foreground_garden.png
    # filter: brightness(0.48) contrast(1.14) saturate(0.88) hue-rotate(-14deg) drop-shadow(0 -6px 16px rgba(10, 4, 18, 0.7))
    garden = load_rgba(os.path.join(DAYTIME_DIR, 'B09_foreground_garden.png'))
    garden = apply_color_filters(garden, brightness=0.48, contrast=1.14, saturate=0.88, hue_rotate_deg=-14.0)
    garden = apply_drop_shadow(garden, 0, -6, 16, (10/255.0, 4/255.0, 18/255.0, 0.7))
    total_kb += save_webp(garden, 'garden.webp', quality=88)

    # 8. Lotus: B10_lotus.png
    # filter: brightness(0.56) contrast(1.18) saturate(1.08) drop-shadow(0 6px 16px rgba(10, 4, 18, 0.75))
    lotus = load_rgba(os.path.join(DAYTIME_DIR, 'B10_lotus.png'))
    lotus = apply_color_filters(lotus, brightness=0.56, contrast=1.18, saturate=1.08)
    lotus = apply_drop_shadow(lotus, 0, 6, 16, (10/255.0, 4/255.0, 18/255.0, 0.75))
    total_kb += save_webp(lotus, 'lotus.webp', quality=88)

    # 9. Realistic Peacock: peacock_head, peacock_body, peacock_tail
    # filter: brightness(0.94) contrast(1.14) saturate(1.1) drop-shadow(0 8px 18px rgba(4, 2, 14, 0.85))
    # Right-size: 1130x705 -> 565x352 (50% scale, preserving exact coordinate proportions)
    for name, fn in [
        ('peacock_head.webp', 'peacock_head.png'),
        ('peacock_body.webp', 'peacock_body.png'),
        ('peacock_tail.webp', 'peacock_tail.png')
    ]:
        p = load_rgba(os.path.join(REALISTIC_DIR, fn))
        p = resize_rgba(p, 565, 352)
        p = apply_color_filters(p, brightness=0.94, contrast=1.14, saturate=1.1)
        p = apply_drop_shadow(p, 0, 8, 18, (4/255.0, 2/255.0, 14/255.0, 0.85))
        total_kb += save_webp(p, name, quality=90)

    # 10. Sacred Havan Kund: havan_kund_perfect.png
    # filter: brightness(0.96) contrast(1.15) saturate(1.12) drop-shadow(0 6px 14px rgba(10, 4, 2, 0.75))
    # Right-size: 1157x549 -> 578x274 (50% scale)
    havan = load_rgba(os.path.join(REALISTIC_DIR, 'havan_kund_perfect.png'))
    havan = resize_rgba(havan, 578, 274)
    havan = apply_color_filters(havan, brightness=0.96, contrast=1.15, saturate=1.12)
    havan = apply_drop_shadow(havan, 0, 6, 14, (10/255.0, 4/255.0, 2/255.0, 0.75))
    total_kb += save_webp(havan, 'havan_kund_perfect.webp', quality=90)

    print(f"\nAll night assets baked successfully!")
    print(f"Total night artwork size: {total_kb / 1024.0:.2f} MB (Down from ~27 MB)")

if __name__ == '__main__':
    bake_all()
