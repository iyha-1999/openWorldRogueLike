import * as Actions from "./actions";
import initialState from "../../initialState";

export const mapReducers = (state = initialState.map, action) => {
  switch (action.type) {
    case Actions.SET_INITIAL_MAP:
      return {
        ...state,
        ...action.payload.initialArray
      };
    case Actions.SET_RAMDOM_MAP:
      return {
        ...state,
        ...action.payload.randomArray
      };
    default:
      return state;
  }
};
