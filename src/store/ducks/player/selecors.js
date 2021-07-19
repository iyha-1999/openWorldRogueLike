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
export const getInitialAnimationTypes = createSelector(
  [playerSelector],
  (state) => state.initialAnimationTypes
);
export const getCurrentAnimationType = createSelector(
  [playerSelector],
  (state) => state.currentAnimationType
);
export const getAnimationPlaying = createSelector(
  [playerSelector],
  (state) => state.animationPlaying
);
export const getDirectionTypes = createSelector(
  [playerSelector],
  (state) => state.directionTypes
);
export const getCurrentDirectionType = createSelector(
  [playerSelector],
  (state) => state.currentDirectionType
);
