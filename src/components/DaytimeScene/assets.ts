// Single source of truth for the daytime artwork.
// Layers import from here, and DaytimeScene warms the cache with the same URLs.
import sky from '../../../assets/daytime/B01_sky.jpg';
import clouds from '../../../assets/daytime/B02_clouds.png';
import birds from '../../../assets/daytime/B03_birds.png';
import leftBranches from '../../../assets/daytime/B04_left_branches.png';
import rightBranches from '../../../assets/daytime/B05_right_branches.png';
import mandap from '../../../assets/daytime/B06_mandap.png';
import leftTrees from '../../../assets/daytime/B07_left_trees.png';
import rightTrees from '../../../assets/daytime/B08_right_trees.png';
import garden from '../../../assets/daytime/B09_foreground_garden.png';
import lotus from '../../../assets/daytime/B10_lotus.png';
import peacockHead from '../../../assets/realistic/peacock_head.png';
import peacockBody from '../../../assets/realistic/peacock_body.png';
import peacockTail from '../../../assets/realistic/peacock_tail.png';
import havanKundReal from '../../../assets/realistic/havan_kund_perfect.png';

export const DAYTIME_ASSETS = {
  sky,
  clouds,
  birds,
  leftBranches,
  rightBranches,
  mandap,
  leftTrees,
  rightTrees,
  garden,
  lotus,
  peacockHead,
  peacockBody,
  peacockTail,
  havanKundReal
} as const;
