TEMPLE ENTRANCE - SCROLL PARALLAX
=================================
Open index.html in a browser (double-click works) and scroll.

Scroll sequence
  1. Grand entrance, doors closed
  2. Scroll: camera pushes in, the doors swing open
  3. Camera travels through the doorway into the hall
  4. Scroll: zoom to Shiva & Parvati in the arch
  5. Scroll: move on through the arch (the exit) into the light, ending on the invitation card

Edit the wording:   content.js
Tune the camera:    main.js  (facadeScale / interiorScale / coupleScale keyframes: [progress], [zoom])
Scroll length:      style.css  ->  #track { height: 1000vh }  (bigger = slower)

Files
  assets/facade.webp      entrance wall with the doorway cut out (generated)
  assets/door-left.webp   your LeftDoorA_02, cropped
  assets/door-right.webp  your RightDoorA_03, cropped
  assets/interior.webp    your Bengali_Temple_Interior_EnvironmentA_06
  assets/couple.webp      your Shiva_and_ParvatiaA_08
