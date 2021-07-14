import * as Actions from "./actions";

const generateSeed = (seedNumnber) => {
    const seed = !seedNumnber ? 88675123 : seedNumnber;
    let x = 123456789;
    let y = 362436069;
    let z = 521288629;
    let w = seed;
  
    // XorShift
    let t;
  
    const next = () => {
      t = x ^ (x << 11);
      x = y;
      y = z;
      z = w;
      return (w = w ^ (w >>> 19) ^ (t ^ (t >>> 8)));
    };
    const nextInt = (min, max) => {
      const r = Math.abs(next());
      return min + (r % (max + 1 - min));
    };
  
    return {
      nextInt
    };
};
export const generateRandomMap = () => {
    return (dispatch, getState) => {
        const { map } = getState();
        const random = generateSeed(map.seed);
        const randomArray = map.initialArray.map((value, index) => {
            return value.map(() => {
                console.log(random.nextInt(0, 3));
              return random.nextInt(0, 3);
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