const gameLoop = {
  keyInput: false,
  playerAct: false,
  enemyRequestAi: false,
  playerMove: false,
  enemyActBegin: false,
  enemyAct: false,
  turnEnd: false
};
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
      x: 8 * 48,
      y: 6 * 48
    }
  }
};

const initialState = {
  ...player,
  ...map,
  ...stage
};
export default initialState;
