// Single source of truth for the evening artwork.
// Every piece is a colour-graded (dusk / night / lit) variant of the original daytime art,
// baked to WebP so the browser never has to filter large images per frame.
import cloudsDusk from '../../../assets/evening/clouds_dusk.webp';
import treesLeftDusk from '../../../assets/evening/trees_left_dusk.webp';
import treesLeftNight from '../../../assets/evening/trees_left_night.webp';
import treesRightDusk from '../../../assets/evening/trees_right_dusk.webp';
import treesRightNight from '../../../assets/evening/trees_right_night.webp';
import branchesLeftDusk from '../../../assets/evening/branches_left_dusk.webp';
import branchesLeftNight from '../../../assets/evening/branches_left_night.webp';
import branchesRightDusk from '../../../assets/evening/branches_right_dusk.webp';
import branchesRightNight from '../../../assets/evening/branches_right_night.webp';
import mandapDim from '../../../assets/evening/mandap_dim.webp';
import mandapLit from '../../../assets/evening/mandap_lit.webp';
import gardenDusk from '../../../assets/evening/garden_dusk.webp';
import gardenNight from '../../../assets/evening/garden_night.webp';
import lotusDusk from '../../../assets/evening/lotus_dusk.webp';
import lotusNight from '../../../assets/evening/lotus_night.webp';

export const EVENING_ASSETS = {
  cloudsDusk,
  treesLeftDusk, treesLeftNight,
  treesRightDusk, treesRightNight,
  branchesLeftDusk, branchesLeftNight,
  branchesRightDusk, branchesRightNight,
  mandapDim, mandapLit,
  gardenDusk, gardenNight,
  lotusDusk, lotusNight
} as const;
