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

  const spriteSheet = `${process.env.PUBLIC_URL}/assets/sprite/player/player.json`;

  useEffect(() => {
    dispatch(setPlayerTextures(Loader, Texture, spriteSheet));
  }, []);

  useEffect(() => {
    dispatch(setPlayerAnimationsTypes(textures, animationTypes));
    dispatch(setPlayerCurrentAnimationType(animationTypes.waitBottom));
  }, [textures]);

  return {
    textures,
    playerPosition,
    currentAnimationType,
  };
};
export default usePlayer;
