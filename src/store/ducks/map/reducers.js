import * as Actions from "./actions";
import initialState from "../../initialState";

export const mapReducers = (state = initialState.map, action) => {
  switch (action.type) {
    case Actions.GENERATE_INITIAL_MAP:
      return {
        ...state,
        ...action.payload.initialArray
      };
    case Actions.GENERATE_RAMDOM_MAP:
      return {
        ...state,
        ...action.payload.randomArray
      };
    case Actions.CHANGE_ONCE_MAPCHIP_FROM_XY:
      return {
        ...state,
        ...action.payload.randomArray
      };
    default:
      return state;
  }
};
