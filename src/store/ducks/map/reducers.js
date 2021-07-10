import * as Actions from "./actions";
import initialState from "../../initialState";

export const mapReducers = (state = initialState.map, action) => {
  switch (action.type) {
    case Actions.GENERATE_INITIAL_MAP:
      const initialArray = Array.from(Array(state.columnMapChipCount), () =>
        Array.from(Array(state.rowMapTipCount), () => 0)
      );
      return {
        ...state,
        ...{ initialArray }
      };
    case Actions.GENERATE_RAMDOM_MAP:
      const generateRundomInt = (maximumNumber, minimumNumber) => {
        return (
          Math.floor(Math.random() * (maximumNumber + 1 - minimumNumber)) +
          minimumNumber
        );
      };
      const randomArray = state.initialArray.map((value, index) => {
        return value.map((secondValue, secondIndex) => {
          return generateRundomInt(3, 0);
        });
      });
      return {
        ...state,
        ...{
          randomArray
        }
      };
    case Actions.CHANGE_ONCE_MAPCHIP_FROM_XY:
      const changedRandomArray = Array.from(state.randomArray);
      changedRandomArray[action.payload.y][action.payload.x] =
        action.payload.mapChipId;
      console.log(changedRandomArray[action.payload.y][action.payload.x]);
      //console.log(state.randomArray[action.payload.y][action.payload.x]);
      return state;
    default:
      return state;
  }
};
