import numpy as np
from PIL import Image
A='../assets/'
O=A+'evening/'
def ld(f): return np.array(Image.open(A+f).convert('RGBA')).astype(np.float32)/255
def sv(a,n,q=88): Image.fromarray((np.clip(a,0,1)*255+.5).astype(np.uint8),'RGBA').save(O+n,'WEBP',quality=q,method=6)
# facade: golden hour. violet-dusk on the roof/top, amber glow lower; brighter near doorway
f=ld('facade.webp'); h,w=f.shape[:2]
yy,xx=np.mgrid[0:h,0:w].astype(np.float32); ys=yy/h; xs=xx/w
top=np.array([0.62,0.50,0.70],np.float32); bot=np.array([1.0,0.74,0.46],np.float32)
t=np.clip((ys-0.1)/0.7,0,1)[...,None]
m=top*(1-t)+bot*t
L=(f[...,:3]@np.array([.299,.587,.114],np.float32))[...,None]
x=f[...,:3]*(1-0.12)+L*0.12
x=x*m*0.80
# doorway warm bloom spilling on walls + vignette
d=np.sqrt(((xs-.5)/.5)**2+((ys-.55)/.6)**2)[...,None]
x=x*np.clip(1.15-0.45*d**1.5,0.4,1.2)
x=x+np.array([1.0,.55,.2],np.float32)*np.clip(1-d*1.6,0,1)*0.10
f[...,:3]=np.clip(x,0,1); sv(f,'facade_golden.webp',90)
# doors: warmer/dimmer
for n in ['door-left','door-right']:
    a=ld(n+'.webp'); a[...,:3]=np.clip(a[...,:3]*np.array([0.88,0.66,0.46],np.float32)*1.0,0,1); sv(a,n+'_golden.webp')
# interior: deeper maroon & amber
a=ld('interior.webp'); h,w=a.shape[:2]
yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
d=np.sqrt(((xx/w-.5)/.5)**2+((yy/h-.58)/.6)**2)[...,None]
rgb=a[...,:3]*np.array([0.95,0.72,0.58],np.float32)*0.72
rgb=rgb*np.clip(1.12-0.55*d**1.5,0.3,1.15)
a[...,:3]=np.clip(rgb,0,1); sv(a,'interior_maroon.webp',90)
