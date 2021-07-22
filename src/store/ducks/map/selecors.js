import { createSelector } from "reselect";

const mapSelector = (state) => state.map;

export const getOnceMapChipSize = createSelector(
  [mapSelector],
  (state) => state.onceMapChipSize
);
export const getArrayRenderMapChips = createSelector(
  [mapSelector],
  (state) => state.arrayRenderMapChips
);
export const getPlayerInitPosition = createSelector(
  [mapSelector],
  (state) => state.playerInitPosition
);
export const getTextures = createSelector(
  [mapSelector],
  (state) => state.textures
);
export const getSeed = createSelector([mapSelector], (state) => state.seed);
