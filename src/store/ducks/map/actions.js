export const GENERATE_INITIAL_MAP = "GENERATE_INITIAL_MAP";
export const generateInitialMap = () => {
  return {
    type: "GENERATE_INITIAL_MAP"
  };
};
export const GENERATE_RAMDOM_MAP = "GENERATE_RAMDOM_MAP";
export const generateRandomMap = () => {
  return {
    type: "GENERATE_RAMDOM_MAP"
  };
};
export const GENERATE_MAPCHIP_SRCS = "GENERATE_MAPCHIP_SRCS";
export const generateMapchipSrcs = () => {
  return {
    type: "GENERATE_MAPCHIP_SRCS"
  };
};
export const CHANGE_ONCE_MAPCHIP_FROM_XY = "CHANGE_ONCE_MAPCHIP_FROM_XY";
export const changeOnceMapChip_FROM_XY = (x, y, mapChipId) => {
  return {
    type: "CHANGE_ONCE_MAPCHIP_FROM_XY",
    payload: {
      x,
      y,
      mapChipId
    }
  };
};
