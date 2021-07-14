import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOnceMapChipSize,
    getRandomArray,
    getPlayerInitPosition
} from "../store/ducks/map/selecors";
import * as Operations from "../store/ducks/map/operations";

import mapChip0 from "../images/map0.png";
import mapChip1 from "../images/map01.png";
import mapChip2 from "../images/map02.png";
import mapChip3 from "../images/map03.png";

const useMap = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();

    const playerInitPosition = getPlayerInitPosition(selector);
    const onceMapChipSize = getOnceMapChipSize(selector);
    const randomArray = getRandomArray(selector);

    let isFirstRender = useRef(false);
    useEffect(() => {
        dispatch(Operations.generateInitialMap());
        dispatch(Operations.generateRandomMap());
        dispatch(Operations.changeOnceMapChipFromXY(playerInitPosition.x,playerInitPosition.y,0));
        isFirstRender.current = true;
    }, []);

    const textures = [mapChip0, mapChip1, mapChip2, mapChip3];
    const checkMapChipType = (number) => {
        switch (number) {
          case 0:
            return textures[0];
          case 1:
            return textures[1];
          case 2:
            return textures[2];
          case 3:
            return textures[3];
          default:
            return textures[4];
        }
      };
    
    return {
        onceMapChipSize,
        randomArray,
        checkMapChipType,
        isFirstRender
    };
}


export default useMap;