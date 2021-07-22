export const SET_INITIAL_MAP = "SET_INITIAL_MAP";
export const setInitialMap = (initialArray) => {
  return {
    type: SET_INITIAL_MAP,
    payload: {
      initialArray,
    },
  };
};
export const SET_RENDER_MAP_CHIPS = "SET_RENDER_MAP_CHIPS";
export const setRenderMapChips = (arrayRenderMapChips) => {
  return {
    type: SET_RENDER_MAP_CHIPS,
    payload: {
      arrayRenderMapChips,
    },
  };
};
export const SET_MAP_TEXTURES = "SET_MAP_TEXTURES";
export const setMapTextures = (textures) => {
  return {
    type: SET_MAP_TEXTURES,
    payload: {
      textures,
    },
  };
};
