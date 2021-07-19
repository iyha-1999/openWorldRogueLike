import { createSelector } from "reselect";

const playerSelector = (state) => state.player;

export const getPlayerPosition = createSelector(
  [playerSelector],
  (state) => state.position
);
export const getPlayerTextures = createSelector(
  [playerSelector],
  (state) => state.textures
);
export const getAnimationTypes = createSelector(
  [playerSelector],
  (state) => state.animationTypes
);
export const getCurrentAnimationType = createSelector(
  [playerSelector],
  (state) => state.currentAnimationType
);
export const getAnimationPlaying = createSelector(
  [playerSelector],
  (state) => state.animationPlaying
);
