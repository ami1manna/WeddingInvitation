import numpy as np
from PIL import Image, ImageFilter
SRC='../assets/daytime/'
OUT='../assets/evening/'

def load(f):
    im=Image.open(SRC+f).convert('RGBA'); return np.array(im).astype(np.float32)/255

def save(a,name,q=88):
    a=np.clip(a,0,1)
    Image.fromarray((a*255+.5).astype(np.uint8),'RGBA').save(OUT+name,'WEBP',quality=q,method=6)

def lum(rgb): return rgb@np.array([.299,.587,.114],np.float32)

def grade(a,tint,gain,desat,gamma=1.0,vgrad=None,keep_warm=0.0,warm_boost=1.0,shadowtint=None):
    rgb=a[...,:3]; al=a[...,3:]
    L=lum(rgb)[...,None]
    # warm emissive mask: yellow lantern / lamp light
    r,g,b=rgb[...,0],rgb[...,1],rgb[...,2]
    warm=((r>.80)&(g>.62)&(b<.62*g)&(r-b>.35)).astype(np.float32)
    warm=np.array(Image.fromarray((warm*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2)))/255.
    warm=warm[...,None]
    x=rgb*(1-desat)+L*desat
    x=np.power(np.clip(x,0,1),gamma)
    x=x*np.array(tint,np.float32)*gain
    if shadowtint is not None:
        x=x+(1-np.clip(L*1.4,0,1))*np.array(shadowtint,np.float32)*0.05
    if vgrad is not None:
        h=a.shape[0]; ys=np.linspace(0,1,h)[:,None,None]
        top,bot=vgrad
        x=x*(top+(bot-top)*ys)
    # re-light emissive parts
    x=x*(1-warm*keep_warm)+np.clip(rgb*warm_boost,0,1)*warm*keep_warm
    return np.concatenate([np.clip(x,0,1),al],-1)

def screen_glow(a,mask_strength=1.0):
    return a

if __name__=='__main__':
    # TREES (lantern light kept)
    for n,f in [('trees_left','B07_left_trees.png'),('trees_right','B08_right_trees.png')]:
        a=load(f)
        d=grade(a,(0.62,0.52,0.72),0.58,0.28,1.15,vgrad=(0.75,1.0),keep_warm=0.9,warm_boost=1.0)
        save(d,n+'_dusk.webp')
        nn=grade(a,(0.30,0.40,0.70),0.34,0.45,1.25,vgrad=(0.55,0.95),keep_warm=0.95,warm_boost=1.05)
        save(nn,n+'_night.webp')
    for n,f in [('branches_left','B04_left_branches.png'),('branches_right','B05_right_branches.png')]:
        a=load(f)
        save(grade(a,(0.72,0.55,0.66),0.62,0.2,1.1,keep_warm=0.9),n+'_dusk.webp')
        save(grade(a,(0.40,0.45,0.72),0.40,0.35,1.2,keep_warm=0.95,warm_boost=1.0),n+'_night.webp')
    a=load('B09_foreground_garden.png')
    save(grade(a,(0.55,0.5,0.62),0.5,0.3,1.2),'garden_dusk.webp')
    save(grade(a,(0.26,0.34,0.58),0.30,0.45,1.3),'garden_night.webp')
    a=load('B10_lotus.png')
    save(grade(a,(0.78,0.58,0.7),0.62,0.15,1.1),'lotus_dusk.webp')
    save(grade(a,(0.5,0.45,0.75),0.46,0.25,1.2),'lotus_night.webp')
    a=load('B06_mandap.png')
    # dim: silhouette in blue dusk
    save(grade(a,(0.5,0.5,0.72),0.38,0.5,1.3),'mandap_dim.webp')
    # lit: warm candle/fairy-light grade, strong falloff to edges, rich golds
    lit=grade(a,(1.0,0.80,0.58),0.80,0.18,1.15,shadowtint=(0.5,0.1,0.1))
    h,w=a.shape[:2]
    yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
    d=np.sqrt(((xx-w*.5)/(w*.55))**2+((yy-h*.62)/(h*.6))**2)
    fall=np.clip(1.08-0.38*d**1.6,0.45,1.15)[...,None]
    lit[...,:3]=np.clip(lit[...,:3]*fall,0,1)
    save(lit,'mandap_lit.webp',90)
    # clouds: dusk violet w/ amber underlight
    a=load('B02_clouds.png')
    c=grade(a,(0.85,0.55,0.7),0.75,0.35,1.1)
    save(c,'clouds_dusk.webp',85)
    print('ok')
