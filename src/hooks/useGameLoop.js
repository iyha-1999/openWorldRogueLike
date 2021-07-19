import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayerCurrentAnimationType,
  setAnimationPlaying,
  setCurrentDirectionType,
} from "../store/ducks/player/operations";
import { changeOnceMapChipFromXY } from "../store/ducks/map/operations";

const useGameLoop = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const changePlayerSptiteAnimation = (animationType) => {
    dispatch(setAnimationPlaying(false));
    dispatch(setPlayerCurrentAnimationType(animationType));
    dispatch(setAnimationPlaying(true));
  };

  useEffect(() => {
    if (selector.userInput.pressed.w) {
      changePlayerSptiteAnimation(selector.player.animationTypes.top);
      dispatch(setCurrentDirectionType(selector.player.directionTypes.top));
    } else {
      changePlayerSptiteAnimation(selector.player.animationTypes.waitTop);
    }
  }, [selector.userInput.pressed.w]);

  useEffect(() => {
    if (selector.userInput.pressed.s) {
      changePlayerSptiteAnimation(selector.player.animationTypes.bottom);
      dispatch(setCurrentDirectionType(selector.player.directionTypes.bottom));
    } else {
      changePlayerSptiteAnimation(selector.player.animationTypes.waitBottom);
    }
  }, [selector.userInput.pressed.s]);

  useEffect(() => {
    if (selector.userInput.pressed.a) {
      changePlayerSptiteAnimation(selector.player.animationTypes.left);
      dispatch(setCurrentDirectionType(selector.player.directionTypes.left));
    } else {
      changePlayerSptiteAnimation(selector.player.animationTypes.waitLeft);
    }
  }, [selector.userInput.pressed.a]);

  useEffect(() => {
    if (selector.userInput.pressed.d) {
      changePlayerSptiteAnimation(selector.player.animationTypes.right);
      dispatch(setCurrentDirectionType(selector.player.directionTypes.right));
    } else {
      changePlayerSptiteAnimation(selector.player.animationTypes.waitRight);
    }
  }, [selector.userInput.pressed.d]);

  useEffect(() => {
    if (selector.userInput.pressed.Enter) console.log("Enter");
  }, [selector.userInput.pressed.Enter]);
};

export default useGameLoop;
