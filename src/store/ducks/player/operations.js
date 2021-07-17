import * as Actions from "./actions";

export const setPlayerTextures = (textures) => {
  return (dispatch) => {
    dispatch(
      Actions.setPlayerTextures({
        textures,
      })
    );
  };
};
export const setPlayerAnimationsTypes = (textures, animationTypes) => {
  const typeKeys = Object.keys(animationTypes);
  const copyAnimationTypes = { ...animationTypes };
  textures.forEach((texture) => {
    const textureId = texture.textureCacheIds[0];
    for (const key in copyAnimationTypes) {
      if (textureId.indexOf(key) != -1) {
        copyAnimationTypes[key].push(texture);
      }
    }
  });
  return (dispatch) => {
    dispatch(
      Actions.setPlayerAnimationsTypes({
        copyAnimationTypes,
      })
    );
  };
};
export const setPlayerCurrentAnimationType = (animationType) => {
  const currentAnimationType = animationType;
  console.log(currentAnimationType);
  return (dispatch) => {
    dispatch(
      Actions.setPlayerCurrentAnimationType({
        currentAnimationType,
      })
    );
  };
};
