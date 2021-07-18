import { createSelector } from "reselect";

const playerSelector = (state) => state.userInput;

export const getUserInputDisabled = createSelector(
  [playerSelector],
  (state) => state.disabled
);
export const getUserInputPressed = createSelector(
  [playerSelector],
  (state) => state.pressed
);
