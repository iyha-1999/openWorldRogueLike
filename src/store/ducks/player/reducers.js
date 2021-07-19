import * as Actions from "./actions";
import initialState from "../../initialState";

export const playerReducers = (state = initialState.player, action) => {
  switch (action.type) {
    case Actions.PLAYER_MOVE_LEFT:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x - initialState.map.onceMapChipSize,
            y: state.position.y,
          },
        },
      };
    case Actions.PLAYER_MOVE_RIGHT:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x + initialState.map.onceMapChipSize,
            y: state.position.y,
          },
        },
      };
    case Actions.PLAYER_MOVE_TOP:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x,
            y: state.position.y - initialState.map.onceMapChipSize,
          },
        },
      };
    case Actions.PLAYER_MOVE_BOTTOM:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x,
            y: state.position.y + initialState.map.onceMapChipSize,
          },
        },
      };
    case Actions.SET_PLAYER_TEXTURES:
      return {
        ...state,
        ...action.payload.textures,
      };
    case Actions.SET_PLAYER_ANIMATION_TYPES:
      return {
        ...state,
        ...action.payload.animationTypes,
      };
    case Actions.SET_PLAYER_CURRENT_ANIMATION_TYPE:
      return {
        ...state,
        ...action.payload.currentAnimationType,
      };
    case Actions.SET_ANIMATION_PLAYING:
      return {
        ...state,
        ...action.payload.animationPlaying,
      };
    case Actions.SET_CURRENT_DIRECTION_TYPE:
      return {
        ...state,
        ...action.payload.currentDirectionType,
      };
    default:
      return state;
  }
};
