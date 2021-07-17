import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOnceMapChipSize,
  getRandomArray,
  getPlayerInitPosition,
  getTextures,
  getSeed
} from "../store/ducks/map/selecors";
import {
  generateInitialMap,
  generateRandomMap,
  changeOnceMapChipFromXY,
  setTextures
} from "../store/ducks/map/operations";

import { Texture,Loader } from 'pixi.js';
const spriteSheet = `${process.env.PUBLIC_URL}/assets/sprite/map/map.json`;

const generateRandomIntFromSeed = (seedNumnber) => {
  const seed = !seedNumnber ? 88675123 : seedNumnber;
  let x = 123456789;
  let y = 362436069;
  let z = 521288629;
  let w = seed;

  // XorShift
  let t;

  const next = () => {
    t = x ^ (x << 11);
    x = y;
    y = z;
    z = w;
    return (w = w ^ (w >>> 19) ^ (t ^ (t >>> 8)));
  };
  const nextInt = (min, max) => {
    const r = Math.abs(next());
    return min + (r % (max + 1 - min));
  };

  return {
    nextInt
  };
};

const useMap = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const playerInitPosition = getPlayerInitPosition(selector);
  const onceMapChipSize = getOnceMapChipSize(selector);
  const randomArray = getRandomArray(selector);
  const textures = getTextures(selector);
  const seed = getSeed(selector);
  const randomIntFromSeed = generateRandomIntFromSeed(seed);

  useEffect(() => {
    dispatch(generateInitialMap());
    const loader = new Loader();
    loader.add(spriteSheet).load((_, resource) => {
      const resourceFrames = resource[spriteSheet].data.frames;
      const textureLength = Object.keys(resourceFrames).length - 1;
      dispatch(generateRandomMap(textureLength,randomIntFromSeed));
      dispatch(changeOnceMapChipFromXY(playerInitPosition.x, playerInitPosition.y, 0));
      const textures = Object.keys(resourceFrames).map((frame) =>
        Texture.from(frame)
      );
      dispatch(setTextures(textures));
    });
  }, []);

  return {
    onceMapChipSize,
    randomArray,
    textures
  };
}

export default useMap;