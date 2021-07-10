import { createSelector } from "reselect";

const playerSelector = (state) => state.player;

export const getPlayerPosition = createSelector(
  [playerSelector],
  (state) => state.position
);
