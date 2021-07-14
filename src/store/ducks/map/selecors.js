import { createSelector } from "reselect";

const mapSelector = (state) => state.map;

export const getOnceMapChipSize = createSelector(
  [mapSelector],
  (state) => state.onceMapChipSize
);
export const getRandomArray = createSelector(
  [mapSelector],
  (state) => state.randomArray
);
export const getPlayerInitPosition = createSelector(
  [mapSelector],
  (state) => state.playerInitPosition
);
