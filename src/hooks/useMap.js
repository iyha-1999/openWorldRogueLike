import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOnceMapChipSize,
  getArrayRenderMapChips,
  getPlayerInitPosition,
  getTextures,
  getSeed,
} from "../store/ducks/map/selecors";
import {
  generateInitialMap,
  generateArrayRenderMapChips,
  changeOnceMapChipFromXY,
  setMapTextures,
} from "../store/ducks/map/operations";
import { useTextureLoader } from "./common/useTextureLoader";

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
    nextInt,
  };
};

const useMap = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const playerInitPosition = getPlayerInitPosition(selector);
  const onceMapChipSize = getOnceMapChipSize(selector);
  const arrayRenderMapChips = getArrayRenderMapChips(selector);
  const textures = getTextures(selector);
  const seed = getSeed(selector);
  const randomIntFromSeed = generateRandomIntFromSeed(seed);

  useEffect(() => {
    dispatch(generateInitialMap());
    useTextureLoader(spriteSheet, (textures) =>
      dispatch(setMapTextures(textures))
    );
  }, []);

  useEffect(() => {
    const textureLength = Object.keys(textures).length - 1;
    dispatch(generateArrayRenderMapChips(textureLength, randomIntFromSeed));
    dispatch(
      changeOnceMapChipFromXY(playerInitPosition.x, playerInitPosition.y, 0)
    );
  }, [textures]);

  return {
    onceMapChipSize,
    arrayRenderMapChips,
    textures,
  };
};

export default useMap;
