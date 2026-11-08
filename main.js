(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;

  const world = $('world'), facade = $('facade'), interior = $('interior'),
        deep = $('deep'), couple = $('couple'), glow = $('glow'), godrays = $('godrays'),
        bloom = $('bloom'), doorL = $('door-l'), doorR = $('door-r'), doorSpill = $('door-spill'),
        foreground = $('foreground'), bellL = $('bell-l'), bellR = $('bell-r'),
        hint = $('hint'), scrim = $('scrim'), blessing = $('blessing'), end = $('end'), chapters = $('chapters'),
        canvas = $('particles-canvas'), ctx = canvas ? canvas.getContext('2d') : null;

  // ---- copy ----
  const C = window.CONTENT || {};
  $('hint-text').textContent = C.hint || '';
  blessing.textContent = C.blessing || '';
  $('end-line').textContent = C.endLine || '';
  $('end-names').textContent = C.names || '';
  $('end-details').textContent = C.details || '';

  // ---- helpers ----
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const smooth = (t) => t * t * (3 - 2 * t);
  const inOut = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // Monotone cubic (PCHIP) so the camera never stops dead at a keyframe or overshoots
  function pchip(xs, ys, log) {
    const Y = log ? ys.map(Math.log) : ys.slice();
    const n = xs.length, h = [], d = [], m = new Array(n);
    for (let i = 0; i < n - 1; i++) { h[i] = xs[i + 1] - xs[i]; d[i] = (Y[i + 1] - Y[i]) / h[i]; }
    m[0] = d[0]; m[n - 1] = d[n - 2];
    for (let i = 1; i < n - 1; i++) {
      if (d[i - 1] * d[i] <= 0) m[i] = 0;
      else {
        const w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1];
        m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]);
      }
    }
    return (x) => {
      if (x <= xs[0]) return log ? Math.exp(Y[0]) : Y[0];
      if (x >= xs[n - 1]) return log ? Math.exp(Y[n - 1]) : Y[n - 1];
      let i = 0; while (x > xs[i + 1]) i++;
      const t = (x - xs[i]) / h[i], t2 = t * t, t3 = t2 * t;
      const v = (2 * t3 - 3 * t2 + 1) * Y[i] + (t3 - 2 * t2 + t) * h[i] * m[i] +
                (-2 * t3 + 3 * t2) * Y[i + 1] + (t3 - t2) * h[i] * m[i + 1];
      return log ? Math.exp(v) : v;
    };
  }

  // ---- camera path (p = scroll progress 0..1) ----
  // entrance scale: slow push, doors open, then the camera passes through the doorway
  const facadeScale   = pchip([0, .08, .28, .50, 1], [1, 1.08, 1.4, 4.9, 4.9], true);
  // hall scale: seen through the doors, full hall, then zoom to the couple and on to the exit
  const interiorScale = pchip([0, .08, .30, .56, .66, .86, 1], [.82, .85, 1.04, 1.14, 1.22, 2.7, 3.7], true);
  // couple drifts a little faster than the hall (deeper parallax)
  const coupleScale   = pchip([0, .56, .86, 1], [.96, 1, 1.1, 1.5], true);

  // ---- 3D volumetric particles system (sacred temple golden dust & marigold petals) ----
  const NUM_PARTICLES = 65;
  const particles = [];
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const z = 0.25 + Math.random() * 1.95;
    particles.push({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      z: z,
      baseZ: z,
      radius: z > 1.7 ? 4.5 + Math.random() * 3.5 : (z > 0.9 ? 2.6 + Math.random() * 2 : 1.3 + Math.random() * 1.4),
      speedY: -(0.18 + Math.random() * 0.42),
      speedX: (Math.random() - 0.5) * 0.22,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 1.6 + Math.random() * 2.4,
      isPetal: Math.random() < 0.25,
      isSaffron: Math.random() < 0.35,
      petalAngle: Math.random() * Math.PI,
      petalRotSpeed: (Math.random() - 0.5) * 0.025
    });
  }

  function renderParticles(p, px, py, time) {
    if (!ctx) return;
    ctx.clearRect(0, 0, 1920, 1080);
    const camZ = p * 1.6;

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const pt = particles[i];
      let effZ = (pt.baseZ - camZ) % 2.0;
      if (effZ < 0.15) effZ += 2.0;

      const scale = 1.0 / Math.max(0.2, effZ);
      const pxShift = -px * (effZ * 20);
      const pyShift = -py * (effZ * 14);

      const driftX = Math.sin(time * 0.8 + pt.phase) * 14 + (pt.speedX * time * 25) % 1920;
      const driftY = Math.cos(time * 0.7 + pt.phase) * 10 + (pt.speedY * time * 28) % 1080;

      const curX = ((pt.x + driftX) % 1920 + 1920) % 1920;
      const curY = ((pt.y + driftY) % 1080 + 1080) % 1080;

      // Perspective projection from temple center (960, 540)
      const sx = 960 + (curX - 960 + pxShift) * (scale * 0.48 + 0.52);
      const sy = 540 + (curY - 540 + pyShift) * (scale * 0.48 + 0.52);

      if (sx < -40 || sx > 1960 || sy < -40 || sy > 1120) continue;

      const tw = 0.65 + 0.35 * Math.sin(time * pt.twinkleSpeed + pt.phase);
      const alpha = tw * clamp((effZ - 0.15) / 0.4) * (1 - smooth(seg(p, 0.91, 0.99)));
      if (alpha <= 0.02) continue;

      const r = pt.radius * (scale * 0.5 + 0.5);

      if (pt.isPetal) {
        pt.petalAngle += pt.petalRotSpeed;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(pt.petalAngle + Math.sin(time + pt.phase) * 0.3);
        ctx.fillStyle = pt.isSaffron ? `rgba(255, 150, 40, ${alpha.toFixed(3)})` : `rgba(255, 195, 70, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.8, r * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        // Glowing gold dust mote with soft halo
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 2.2);
        const colCore = pt.isSaffron ? `rgba(255, 230, 160, ${alpha.toFixed(3)})` : `rgba(255, 250, 210, ${alpha.toFixed(3)})`;
        const colAura = pt.isSaffron ? `rgba(255, 140, 30, ${(alpha * 0.35).toFixed(3)})` : `rgba(255, 195, 60, ${(alpha * 0.35).toFixed(3)})`;
        grad.addColorStop(0, colCore);
        grad.addColorStop(0.45, colAura);
        grad.addColorStop(1, 'rgba(255, 170, 50, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, r * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // ---- layout ----
  let S = 1;
  function fit() {
    S = Math.max(innerWidth / 1920, innerHeight / 1080);
    world.style.setProperty('--s', S);
  }
  addEventListener('resize', () => { fit(); target = readScroll(); });
  fit();

  // ---- input ----
  let target = 0, cur = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
  const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const readScroll = () => clamp(scrollY / maxScroll());
  addEventListener('scroll', () => { target = readScroll(); }, { passive: true });

  if (!reduce) {
    // Desktop mouse pointer
    if (fine) {
      addEventListener('pointermove', (e) => {
        tmx = (e.clientX / innerWidth - .5) * 2;
        tmy = (e.clientY / innerHeight - .5) * 2;
      }, { passive: true });
    }

    // Mobile / Tablet Gyroscope orientation
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          tmx = clamp(e.gamma / 22, -1, 1);
          tmy = clamp((e.beta - 45) / 22, -1, 1);
        }
      }, { passive: true });
    }

    // Touch gesture pan
    let touchStartX = 0, touchStartY = 0;
    addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });
    addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const dx = (e.touches[0].clientX - touchStartX) / innerWidth;
        const dy = (e.touches[0].clientY - touchStartY) / innerHeight;
        tmx = clamp(dx * 2.5, -1, 1);
        tmy = clamp(dy * 2.5, -1, 1);
      }
    }, { passive: true });
    addEventListener('touchend', () => {
      tmx = 0; tmy = 0;
    }, { passive: true });
  }

  // ---- render ----
  function render(p, px, py, time) {
    const F = facadeScale(p), si = interiorScale(p), kc = coupleScale(p);
    const lift = -53 * smooth(seg(p, .5, .9));              // centre the arch on screen
    const fade = 1 - seg(p, .28, .44);                       // pointer parallax fades once we're inside

    // 3D Camera tilt on #world (Gimbal perspective)
    if (!reduce) {
      const rotX = (-py * 2.6).toFixed(2);
      const rotY = (px * 3.6).toFixed(2);
      world.style.transform = `scale(var(--s,1)) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    // 1. Foreground Entrance Framing (Hanging brass bells & Marigold Toran)
    const fgVisible = p < .42;
    if (foreground) {
      foreground.style.visibility = fgVisible ? 'visible' : 'hidden';
      if (fgVisible) {
        const fgScale = 1 + 1.55 * smooth(seg(p, 0, .35));
        const fgLift = -140 * smooth(seg(p, .05, .35));
        const fgTx = -px * 44;
        const fgTy = -py * 28 + fgLift;
        const fgOp = 1 - smooth(seg(p, .20, .38));
        foreground.style.transform = `translate(${fgTx.toFixed(2)}px,${fgTy.toFixed(2)}px) scale(${fgScale.toFixed(4)})`;
        foreground.style.opacity = fgOp.toFixed(3);

        // Hanging brass bells swaying with breeze and mouse inertia
        if (bellL && bellR) {
          const sway = Math.sin(time * 2.6) * 1.8;
          bellL.style.transform = `rotate(${(px * 6 + sway).toFixed(2)}deg)`;
          bellR.style.transform = `rotate(${(px * 6 + Math.sin(time * 2.6 + 1.2) * 1.8).toFixed(2)}deg)`;
        }
      }
    }

    // 2. Facade + Wooden Doors + Floor Light Spill
    const fv = p < .505;
    facade.style.visibility = fv ? 'visible' : 'hidden';
    if (fv) {
      facade.style.transform = `translate(${(-px * 24 * fade).toFixed(2)}px,${(-py * 16 * fade).toFixed(2)}px) scale(${F.toFixed(4)})`;
      const a = 84 * inOut(seg(p, .10, .30));
      const sh = (1 - .38 * (a / 84)).toFixed(3);
      doorL.style.transform = `rotateY(${a.toFixed(2)}deg)`;
      doorR.style.transform = `rotateY(${(-a).toFixed(2)}deg)`;
      doorL.firstElementChild.style.filter = doorR.firstElementChild.style.filter = `brightness(${sh})`;

      // Warm golden light spill pooling across the entrance steps as doors open
      if (doorSpill) {
        const spill = inOut(seg(p, .10, .30));
        const spillOp = spill * (1 - seg(p, .34, .48)) * 0.9;
        doorSpill.style.transform = `scale(${spill.toFixed(3)})`;
        doorSpill.style.opacity = spillOp.toFixed(3);
      }
    }

    // 3. Hall Interior (pillars, garlands, brass lamps)
    const itx = (-px * 13).toFixed(2), ity = (-py * 8 + lift).toFixed(2);
    interior.style.transform = `translate(${itx}px,${ity}px) scale(${si.toFixed(4)})`;

    // 4. Deep Layer (Sanctum wall & background behind arch - differential parallax)
    const dScale = (si * (.94 + .06 * smooth(seg(p, .25, .85)))).toFixed(4);
    const dtx = (-px * 6).toFixed(2), dty = (-py * 4 + lift * .88).toFixed(2);
    deep.style.transform = `translate(${dtx}px,${dty}px) scale(${dScale})`;

    // 5. Shiva & Parvati (sacred divine couple)
    const co = 1 - smooth(seg(p, .88, .97));
    const hover = Math.sin(time * 1.7) * 3; // subtle sacred floating breath
    couple.style.transform = `translate(${(-px * 4 - 70 * smooth(seg(p, .86, 1))).toFixed(2)}px,${(26 * smooth(seg(p, .86, 1)) + hover).toFixed(2)}px) scale(${kc.toFixed(4)})`;
    couple.style.opacity = co.toFixed(3);

    // 6. Volumetric Godrays & Sacred Glow
    if (godrays) {
      const rayRot = (time * 2.8 + px * 2).toFixed(2);
      const rayScale = (.85 + .65 * smooth(seg(p, .45, .95))).toFixed(3);
      godrays.style.transform = `translate(${(-px * 2.2).toFixed(2)}px,${(-py * 1.6).toFixed(2)}px) rotate(${rayRot}deg) scale(${rayScale})`;
      godrays.style.opacity = (smooth(seg(p, .08, .28)) * (1 - smooth(seg(p, .86, .98))) * 0.75).toFixed(3);
    }
    glow.style.transform = `translate(${(-px * 2).toFixed(2)}px,${(-py * 1.5).toFixed(2)}px) scale(${(1 + .7 * smooth(seg(p, .6, 1))).toFixed(3)})`;
    glow.style.opacity = (.78 + .22 * seg(p, .55, .9)).toFixed(3);
    bloom.style.opacity = smooth(seg(p, .84, .98)).toFixed(3);

    // 7. 3D Floating Particles Volume
    renderParticles(p, px, py, time);

    // 8. Captions with floating depth
    hint.style.opacity = (1 - seg(p, .0, .05)).toFixed(3);
    hint.style.transform = `translate(${(-px * 8).toFixed(2)}px,${(-py * 5).toFixed(2)}px)`;

    const bo = smooth(seg(p, .64, .72)) * (1 - smooth(seg(p, .80, .86)));
    blessing.style.opacity = bo.toFixed(3);
    blessing.style.transform = `translate(${(-px * 10).toFixed(2)}px,${(-py * 6).toFixed(2)}px)`;
    scrim.style.opacity = Math.max(bo, 1 - seg(p, .0, .05)).toFixed(3);

    const eo = smooth(seg(p, .93, 1));
    end.style.opacity = eo.toFixed(3);
    end.style.visibility = eo > 0 ? 'visible' : 'hidden';
    if (eo > 0) {
      end.style.transform = `perspective(800px) rotateX(${(-py * 2.5).toFixed(2)}deg) rotateY(${(px * 3.5).toFixed(2)}deg) translate(${(-px * 6).toFixed(2)}px,${(-py * 4).toFixed(2)}px)`;
    }

    // 9. Chapter nav
    chapters.classList.toggle('dark', p > .95);
    let best = 0, bd = 9;
    CH.forEach((c, i) => { const dd = Math.abs(c.at - p); if (dd < bd) { bd = dd; best = i; } });
    if (best !== lastCh) { btns.forEach((b, i) => b.classList.toggle('on', i === best)); lastCh = best; }
  }

  // ---- chapters ----
  const CH = [
    { at: 0,   label: 'Entrance' },
    { at: .30, label: 'Doors open' },
    { at: .62, label: 'The hall' },
    { at: .80, label: 'Shiva & Parvati' },
    { at: 1,   label: 'Exit' }
  ];
  let lastCh = -1;
  const btns = CH.map((c) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', c.label);
    b.innerHTML = `<span>${c.label}</span><i></i>`;
    b.addEventListener('click', () => scrollTo({ top: c.at * maxScroll(), behavior: reduce ? 'auto' : 'smooth' }));
    chapters.appendChild(b);
    return b;
  });

  // ---- loop ----
  let last = performance.now();
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const time = now / 1000;
    const k = reduce ? 1 : 1 - Math.exp(-dt * 6.5);
    cur += (target - cur) * k;
    if (Math.abs(target - cur) < 1e-5) cur = target;
    const pk = reduce ? 1 : 1 - Math.exp(-dt * 5);
    mx += (tmx - mx) * pk; my += (tmy - my) * pk;
    render(cur, mx, my, time);
    requestAnimationFrame(frame);
  }

  // ---- start once every image is decoded ----
  const imgs = [...document.images];
  Promise.all(imgs.map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve())))
    .then(() => {
      target = cur = readScroll();
      render(cur, 0, 0, 0);
      $('loader').classList.add('done');
      requestAnimationFrame((t) => { last = t; frame(t); });
    });
})();