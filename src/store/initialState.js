const gameLoop = {
  keyInput: false,
  playerAct: false,
  enemyRequestAi: false,
  playerMove: false,
  enemyActBegin: false,
  enemyAct: false,
  turnEnd: false,
};
const stage = {
  stage: {
    width: 800,
    height: 600,
  },
};
const map = {
  map: {
    onceMapChipSize: 48,
    columnMapChipCount: 13,
    rowMapTipCount: 17,
    initialArray: [[0]],
    randomArray: [[0]],
    chunk: [{ x: 0, y: 0, map: [[0]] }],
    playerInitPosition: {
      x: 8,
      y: 6,
    },
    textures: [],
    seed: 1,
  },
};
const player = {
  player: {
    position: {
      x: 8 * 48,
      y: 6 * 48,
    },
    textures: [],
    directionTypes: {
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
    },
    currentDirectionType: "top",
    animationTypes: {
      waitTop: [],
      waitBottom: [],
      waitLeft: [],
      waitRight: [],
      top: [],
      bottom: [],
      left: [],
      right: [],
    },
    initialAnimationTypes: "waitTop",
    currentAnimationType: [],
    animationPlaying: false,
  },
};
const userInput = {
  userInput: {
    disabled: {
      all: false,
      w: false,
      s: false,
      a: false,
      d: false,
      Enter: false,
    },
    pressed: {
      w: false,
      s: false,
      a: false,
      d: false,
      Enter: false,
    },
  },
};

const initialState = {
  ...player,
  ...map,
  ...stage,
  ...userInput,
};
export default initialState;
