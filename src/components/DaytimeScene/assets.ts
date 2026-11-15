// Single source of truth for the night artwork.
// Every layer imports from here: pre-baked colour-graded WebP assets
// with right-sized dimensions and baked drop-shadows and masks.
import sky from '../../../assets/night/sky.webp';
import clouds from '../../../assets/night/clouds.webp';
import birds from '../../../assets/night/birds.webp';
import leftBranches from '../../../assets/night/branches_left.webp';
import rightBranches from '../../../assets/night/branches_right.webp';
import mandap from '../../../assets/night/mandap.webp';
import leftTrees from '../../../assets/night/trees_left.webp';
import rightTrees from '../../../assets/night/trees_right.webp';
import garden from '../../../assets/night/garden.webp';
import lotus from '../../../assets/night/lotus.webp';
import peacockHead from '../../../assets/night/peacock_head.webp';
import peacockBody from '../../../assets/night/peacock_body.webp';
import peacockTail from '../../../assets/night/peacock_tail.webp';
import havanKundReal from '../../../assets/night/havan_kund_perfect.webp';

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
