import * as Actions from "./actions";

export const generateRandomMap = () => {
    return (dispatch, getState) => {
        const { map } = getState();
        const generateRundomInt = (maximumNumber, minimumNumber) => {
            return (
              Math.floor(Math.random() * (maximumNumber + 1 - minimumNumber)) +
              minimumNumber
            );
        };
        const randomArray = map.initialArray.map((value, index) => {
            return value.map(() => {
              return generateRundomInt(3, 0);
            });
        });
        dispatch(Actions.setRandomMap({
            randomArray
        }));
    };
}
export const generateInitialMap = () => {
    return (dispatch, getState) => {
        const { map } = getState();
        const initialArray = Array.from(Array(map.columnMapChipCount), () =>
            Array.from(Array(map.rowMapTipCount), () => 0)
        );
        dispatch(Actions.setInitialMap({
            initialArray
        }));
    };
}

export const changeOnceMapChipFromXY = (x,y,mapChipId) => {
    return (dispatch, getState) => {
        const { map } = getState();
        const copyTwoDimensionalArray = (twoDimensionalArray) => {
            const result = [];
            for (const value of twoDimensionalArray) {
              result.push([...value]);
            }
            return result;
        }
        let changedRandomArray = copyTwoDimensionalArray(map.randomArray);
        changedRandomArray[y][x] = mapChipId;

        dispatch(Actions.setRandomMap({
            randomArray:changedRandomArray
        }));
    };
}