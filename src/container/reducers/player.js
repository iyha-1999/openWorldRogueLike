import {
  PLAYER_MOVE_LEFT,
  PLAYER_MOVE_RIGHT,
  PLAYER_MOVE_TOP,
  PLAYER_MOVE_BOTTOM
} from "../actions/playerMove";

import initialState from "../store/initialState";

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_MOVE_LEFT:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x - initialState.map.onceMapChipSize,
            y: state.position.y
          }
        }
      };
    case PLAYER_MOVE_RIGHT:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x + initialState.map.onceMapChipSize,
            y: state.position.y
          }
        }
      };
    case PLAYER_MOVE_TOP:
      return {
        ...state,
        ...{
          position: {
            x: state.position.x,
            y: state.position.y - initialState.map.onceMapChipSize
          }
        }
      };
    case PLAYER_MOVE_BOTTOM:
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

export default playerReducer;
