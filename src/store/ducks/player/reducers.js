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
            y: state.position.y
          }
        }
      };
    case Actions.PLAYER_MOVE_RIGHT:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x + initialState.map.onceMapChipSize,
            y: state.position.y
          }
        }
      };
    case Actions.PLAYER_MOVE_TOP:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x,
            y: state.position.y - initialState.map.onceMapChipSize
          }
        }
      };
    case Actions.PLAYER_MOVE_BOTTOM:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x,
            y: state.position.y + initialState.map.onceMapChipSize
          }
        }
      };
    default:
      return state;
  }
};
