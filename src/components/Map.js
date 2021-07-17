import React from 'react';
import useMap from '../hooks/useMap';
import { Container, Sprite } from '@inlet/react-pixi';

const Map = () => {
  const { onceMapChipSize,randomArray,textures } = useMap();

  if (textures.length === 0) {
    return null;
  }

  return (
    <Container>
      {randomArray.map((value, index) => {
        const sprites = value.map((secondValue, secondIndex) => {
          return (
            <Sprite
              texture={textures[secondValue]}
              x={secondIndex * onceMapChipSize}
              y={index * onceMapChipSize}
            />
          );
        });
        return [...sprites];
      }) }
    </Container>
  );
};
export default Map;
