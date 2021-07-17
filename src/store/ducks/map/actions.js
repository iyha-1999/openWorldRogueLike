export const SET_INITIAL_MAP = "SET_INITIAL_MAP";
export const setInitialMap = (initialArray) => {
  return {
    type: SET_INITIAL_MAP,
    payload: {
      initialArray
    }
  };
};
export const SET_RAMDOM_MAP = "SET_RAMDOM_MAP";
export const setRandomMap = (randomArray) => {
  return {
    type: SET_RAMDOM_MAP,
    payload: {
      randomArray
    }
  };
};
export const SET_TEXTURES = "SET_TEXTURE";
export const setTextures = (textures) => {
  return {
    type: SET_TEXTURES,
    payload: {
      textures
    }
  };
};
