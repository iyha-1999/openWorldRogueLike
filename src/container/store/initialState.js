const stage = {
  stage: {
    width: 800,
    height: 600
  }
};
const map = {
  map: {
    onceMapChipSize: 48,
    columnMapChipCount: 13,
    rowMapTipCount: 17,
    initialArray: undefined,
    randomArray: undefined,
    mapchipSrcs: undefined
  }
};
const player = {
  player: {
    position: {
      x: 0,
      y: 0
    }
  }
};

const initialState = {
  ...player,
  ...map,
  ...stage
};
export default initialState;
