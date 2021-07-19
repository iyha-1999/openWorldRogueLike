export const PLAYER_MOVE_LEFT = "PLAYER_MOVE_LEFT";
export const playerMoveLeftAction = () => {
  return {
    type: "PLAYER_MOVE_LEFT",
  };
};
export const PLAYER_MOVE_RIGHT = "PLAYER_MOVE_RIGHT";
export const playerMoveRightAction = () => {
  return {
    type: "PLAYER_MOVE_RIGHT",
  };
};
export const PLAYER_MOVE_TOP = "PLAYER_MOVE_TOP";
export const playerMoveTopAction = () => {
  return {
    type: "PLAYER_MOVE_TOP",
  };
};
export const PLAYER_MOVE_BOTTOM = "PLAYER_MOVE_BOTTOM";
export const playerMoveBottomAction = () => {
  return {
    type: "PLAYER_MOVE_BOTTOM",
  };
};
export const SET_PLAYER_TEXTURES = "SET_PLAYER_TEXTURES";
export const setPlayerTextures = (textures) => {
  return {
    type: SET_PLAYER_TEXTURES,
    payload: {
      textures,
    },
  };
};
export const SET_PLAYER_ANIMATION_TYPES = "SET_PLAYER_ANIMATION_TYPES";
export const setPlayerAnimationsTypes = (animationTypes) => {
  return {
    type: SET_PLAYER_TEXTURES,
    payload: {
      animationTypes,
    },
  };
};
export const SET_PLAYER_CURRENT_ANIMATION_TYPE =
  "SET_PLAYER_CURRENT_ANIMATION_TYPE";
export const setPlayerCurrentAnimationType = (currentAnimationType) => {
  return {
    type: SET_PLAYER_CURRENT_ANIMATION_TYPE,
    payload: {
      currentAnimationType,
    },
  };
};
export const SET_ANIMATION_PLAYING = "SET_ANIMATION_PLAYING";
export const setAnimationPlaying = (animationPlaying) => {
  return {
    type: SET_ANIMATION_PLAYING,
    payload: {
      animationPlaying,
    },
  };
};
