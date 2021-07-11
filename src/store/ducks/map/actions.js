export const GENERATE_INITIAL_MAP = "GENERATE_INITIAL_MAP";
export const generateInitialMap = (initialArray) => {
  return {
    type: "GENERATE_INITIAL_MAP",
    payload: {
      initialArray
    }
  };
};
export const GENERATE_RAMDOM_MAP = "GENERATE_RAMDOM_MAP";
export const generateRandomMap = (randomArray) => {
  return {
    type: "GENERATE_RAMDOM_MAP",
    payload: {
      randomArray
    }
  };
};
export const GENERATE_MAPCHIP_SRCS = "GENERATE_MAPCHIP_SRCS";
export const generateMapchipSrcs = () => {
  return {
    type: "GENERATE_MAPCHIP_SRCS"
  };
};
export const CHANGE_ONCE_MAPCHIP_FROM_XY = "CHANGE_ONCE_MAPCHIP_FROM_XY";
export const changeOnceMapChipFromXY = (x, y, mapChipId,randomArray) => {
  return {
    type: "CHANGE_ONCE_MAPCHIP_FROM_XY",
    payload: {
      x,
      y,
      mapChipId,
      randomArray
    }
  };
};
