import { useEffect, useRef } from "react";
import { Sprite, Container } from "@inlet/react-pixi";
import mapChip0 from "../images/map0.png";
import mapChip1 from "../images/map01.png";
import mapChip2 from "../images/map02.png";
import mapChip3 from "../images/map03.png";

import {
  GENERATE_INITIAL_MAP,
  GENERATE_RAMDOM_MAP
} from "../container/actions/map";

const checkMapChipType = (number) => {
  switch (number) {
    case 0:
      return mapChip0;
    case 1:
      return mapChip1;
    case 2:
      return mapChip2;
    case 3:
      return mapChip3;
    default:
      return mapChip0;
  }
};

const Map = ({ state, dispatch }) => {
  const isFirstRender = useRef(false);
  useEffect(() => {
    dispatch({ type: GENERATE_INITIAL_MAP });
    dispatch({ type: GENERATE_RAMDOM_MAP });
    isFirstRender.current = true;
  }, []);
  const sprites = () => {
    if (isFirstRender.current) {
      return state.map.randomArray.map((value, index) => {
        const sprites = value.map((mapValue, mapIndex) => {
          return (
            <Sprite
              image={checkMapChipType(mapValue)}
              x={mapIndex * state.map.onceMapChipSize}
              y={index * state.map.onceMapChipSize}
            />
          );
        });
        return [...sprites];
      });
    }
  };
  return <Container>{sprites()}</Container>;
};
export default Map;
