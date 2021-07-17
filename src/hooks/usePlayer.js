import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayerTextures,
  setPlayerAnimationsTypes,
  setPlayerCurrentAnimationType,
} from "../store/ducks/player/operations";
import {
  getPlayerPosition,
  getPlayerTextures,
  getAnimationTypes,
  getCurrentAnimationType,
} from "../store/ducks/player/selecors";

import { Texture, Loader } from "pixi.js";

const usePlayer = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const playerPosition = getPlayerPosition(selector);
  const animationTypes = getAnimationTypes(selector);
  const currentAnimationType = getCurrentAnimationType(selector);
  const textures = getPlayerTextures(selector);
  const loader = new Loader();
  const spriteSheet = `${process.env.PUBLIC_URL}/assets/sprite/player/player.json`;
  useEffect(() => {
    loader.add(spriteSheet).load((_, resource) => {
      const resourceFrames = resource[spriteSheet].data.frames;
      const textures = Object.keys(resourceFrames).map((frame) =>
        Texture.from(frame)
      );
      dispatch(setPlayerTextures(textures));
      dispatch(setPlayerAnimationsTypes(textures, animationTypes));
      dispatch(setPlayerCurrentAnimationType(animationTypes.waitBottom));
    });
  }, []);
  return {
    textures,
    playerPosition,
    currentAnimationType,
  };
};
export default usePlayer;
