import { Texture, Loader } from "pixi.js";
export const useTextureLoader = (spriteSheet, callback) => {
  const loader = new Loader();
  loader.add(spriteSheet).load((_, resource) => {
    const resourceFrames = resource[spriteSheet].data.frames;
    const textures = Object.keys(resourceFrames).map((frame) =>
      Texture.from(frame)
    );
    callback(textures);
  });
};
