import * as Actions from "./actions";

export const setPlayerTextures = (Loader, Texture, spriteSheet) => {
  return (dispatch) => {
    const loader = new Loader();
    loader.add(spriteSheet).load((_, resource) => {
      const resourceFrames = resource[spriteSheet].data.frames;
      const textures = Object.keys(resourceFrames).map((frame) =>
        Texture.from(frame)
      );
      dispatch(
        Actions.setPlayerTextures({
          textures,
        })
      );
    });
  };
};
export const setPlayerAnimationsTypes = (textures, animationTypes) => {
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
  return (dispatch) => {
    dispatch(
      Actions.setPlayerCurrentAnimationType({
        currentAnimationType,
      })
    );
  };
};
// export const setPlayerInitialAnimationType = (
//   animationTypes,
//   initialAnimationType
// ) => {
//   const initialAnimationType = animationTypes[0];
//   return (dispatch) => {
//     dispatch(
//       Actions.setPlayerInitialAnimationType({
//         initialAnimationType,
//       })
//     );
//   };
// };
