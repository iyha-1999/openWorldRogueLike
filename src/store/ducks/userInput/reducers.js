import * as Actions from "./actions";
import initialState from "../../initialState";

export const userInputReducers = (state = initialState.userInput, action) => {
  switch (action.type) {
    case Actions.SET_USER_INPUT_PLESSED:
      return {
        ...state,
        ...action.payload.pressed,
      };
    case Actions.SET_USER_INPUT_DISABLED:
      return {
        ...state,
        ...action.payload.disabled,
      };
    default:
      return state;
  }
};
