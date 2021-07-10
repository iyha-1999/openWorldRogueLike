import { useEffect, useRef } from "react";
import { Sprite, Container } from "@inlet/react-pixi";
import mapChip0 from "../images/map0.png";
import mapChip1 from "../images/map01.png";
import mapChip2 from "../images/map02.png";
import mapChip3 from "../images/map03.png";

import * as Actions from "../store/ducks/map/actions";
import {
  getOnceMapChipSize,
  getRandomArray
} from "../store/ducks/map/selecors";

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

const Map = ({ selector, dispatch }) => {
  const isFirstRender = useRef(false);
  useEffect(() => {
    dispatch(Actions.generateInitialMap());
    dispatch(Actions.generateRandomMap());
    dispatch(Actions.changeOnceMapChip_FROM_XY(8, 6, 0));
    isFirstRender.current = true;
  }, []);

  const onceMapChipSize = getOnceMapChipSize(selector);
  const randomArray = getRandomArray(selector);
  const sprites = () => {
    if (isFirstRender.current) {
      return randomArray.map((value, index) => {
        const sprites = value.map((mapValue, mapIndex) => {
          return (
            <Sprite
              image={checkMapChipType(mapValue)}
              x={mapIndex * onceMapChipSize}
              y={index * onceMapChipSize}
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
