(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;

  const world = $('world'), facade = $('facade'), interior = $('interior'),
        deep = $('deep'), couple = $('couple'), glow = $('glow'), bloom = $('bloom'),
        doorL = $('door-l'), doorR = $('door-r'),
        hint = $('hint'), scrim = $('scrim'), blessing = $('blessing'), end = $('end'), chapters = $('chapters');

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
  if (fine && !reduce) {
    addEventListener('pointermove', (e) => {
      tmx = (e.clientX / innerWidth - .5) * 2;
      tmy = (e.clientY / innerHeight - .5) * 2;
    }, { passive: true });
  }

  // ---- render ----
  function render(p, px, py) {
    const F = facadeScale(p), si = interiorScale(p), kc = coupleScale(p);
    const lift = -53 * smooth(seg(p, .5, .9));              // centre the arch on screen
    const fade = 1 - seg(p, .28, .42);                       // pointer parallax fades once we're inside

    // facade + doors
    const fv = p < .505;
    facade.style.visibility = fv ? 'visible' : 'hidden';
    if (fv) {
      facade.style.transform = `translate(${(-px * 9 * fade).toFixed(2)}px,${(-py * 6 * fade).toFixed(2)}px) scale(${F.toFixed(4)})`;
      const a = 84 * inOut(seg(p, .10, .30));
      const sh = (1 - .38 * (a / 84)).toFixed(3);
      doorL.style.transform = `rotateY(${a.toFixed(2)}deg)`;
      doorR.style.transform = `rotateY(${(-a).toFixed(2)}deg)`;
      doorL.firstElementChild.style.filter = doorR.firstElementChild.style.filter = `brightness(${sh})`;
    }

    // hall (interior + registered deep layer)
    const itx = (-px * 5).toFixed(2), ity = (-py * 3 + lift).toFixed(2);
    const t = `translate(${itx}px,${ity}px) scale(${si.toFixed(4)})`;
    interior.style.transform = t;
    deep.style.transform = t;

    // couple
    const co = 1 - smooth(seg(p, .88, .97));
    couple.style.transform = `translate(${(-px * 3 - 70 * smooth(seg(p, .86, 1))).toFixed(2)}px,${(26 * smooth(seg(p, .86, 1))).toFixed(2)}px) scale(${kc.toFixed(4)})`;
    couple.style.opacity = co.toFixed(3);

    // light behind them, growing into the exit
    glow.style.transform = `scale(${(1 + .7 * smooth(seg(p, .6, 1))).toFixed(3)})`;
    glow.style.opacity = (.78 + .22 * seg(p, .55, .9)).toFixed(3);
    bloom.style.opacity = smooth(seg(p, .84, .98)).toFixed(3);

    // captions
    hint.style.opacity = (1 - seg(p, .0, .05)).toFixed(3);
    const bo = smooth(seg(p, .64, .72)) * (1 - smooth(seg(p, .80, .86)));
    blessing.style.opacity = bo.toFixed(3);
    scrim.style.opacity = Math.max(bo, 1 - seg(p, .0, .05)).toFixed(3);
    const eo = smooth(seg(p, .93, 1));
    end.style.opacity = eo.toFixed(3);
    end.style.visibility = eo > 0 ? 'visible' : 'hidden';

    // chapter nav
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
  let last = performance.now(), idle = false;
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const k = reduce ? 1 : 1 - Math.exp(-dt * 6.5);
    cur += (target - cur) * k;
    if (Math.abs(target - cur) < 1e-5) cur = target;
    const pk = reduce ? 1 : 1 - Math.exp(-dt * 5);
    mx += (tmx - mx) * pk; my += (tmy - my) * pk;
    render(cur, mx, my);
    requestAnimationFrame(frame);
  }

  // ---- start once every image is decoded ----
  const imgs = [...document.images];
  Promise.all(imgs.map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve())))
    .then(() => {
      target = cur = readScroll();
      render(cur, 0, 0);
      $('loader').classList.add('done');
      requestAnimationFrame((t) => { last = t; frame(t); });
    });
})();
