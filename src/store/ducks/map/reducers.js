import * as Actions from "./actions";
import initialState from "../../initialState";

export const mapReducers = (state = initialState.map, action) => {
  switch (action.type) {
    case Actions.SET_INITIAL_MAP:
      return {
        ...state,
        ...action.payload.initialArray,
      };
    case Actions.SET_RENDER_MAP_CHIPS:
      return {
        ...state,
        ...action.payload.arrayRenderMapChips,
      };
    case Actions.SET_TEXTURES:
      return {
        ...state,
        ...action.payload.textures,
      };
    default:
      return state;
  }
};
