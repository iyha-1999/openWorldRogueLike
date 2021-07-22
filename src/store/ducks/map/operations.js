import * as Actions from "./actions";

export const generateArrayRenderMapChips = (
  textureLength,
  randomIntFromSeed
) => {
  return (dispatch, getState) => {
    const { map } = getState();
    const arrayRenderMapChips = map.initialArray.map((value, index) => {
      return value.map(() => {
        return randomIntFromSeed.nextInt(0, textureLength);
      });
    });
    dispatch(
      Actions.setRenderMapChips({
        arrayRenderMapChips,
      })
    );
  };
};
export const generateInitialMap = () => {
  return (dispatch, getState) => {
    const { map } = getState();
    const initialArray = Array.from(Array(map.columnMapChipCount), () =>
      Array.from(Array(map.rowMapTipCount), () => 0)
    );
    dispatch(
      Actions.setInitialMap({
        initialArray,
      })
    );
  };
};

export const changeOnceMapChipFromXY = (x, y, mapChipId) => {
  return (dispatch, getState) => {
    const { map } = getState();
    const copyTwoDimensionalArray = (twoDimensionalArray) => {
      const result = [];
      for (const value of twoDimensionalArray) {
        result.push([...value]);
      }
      return result;
    };
    let changedArrayRenderMapChips = copyTwoDimensionalArray(
      map.arrayRenderMapChips
    );
    changedArrayRenderMapChips[y][x] = mapChipId;
    dispatch(
      Actions.setRenderMapChips({
        arrayRenderMapChips: changedArrayRenderMapChips,
      })
    );
  };
};

export const setTextures = (textures) => {
  return (dispatch) => {
    dispatch(
      Actions.setTextures({
        textures,
      })
    );
  };
};
