import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayerCurrentAnimationType,
  setAnimationPlaying,
} from "../store/ducks/player/operations";

const useGameLoop = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const changePlayerSptiteAnimation = (animationType) => {
    dispatch(setAnimationPlaying(false));
    dispatch(setPlayerCurrentAnimationType(animationType));
    dispatch(setAnimationPlaying(true));
  };

  useEffect(() => {
    selector.userInput.pressed.w
      ? changePlayerSptiteAnimation(selector.player.animationTypes.top)
      : changePlayerSptiteAnimation(selector.player.animationTypes.waitTop);
  }, [selector.userInput.pressed.w]);

  useEffect(() => {
    selector.userInput.pressed.s
      ? changePlayerSptiteAnimation(selector.player.animationTypes.bottom)
      : changePlayerSptiteAnimation(selector.player.animationTypes.waitBottom);
  }, [selector.userInput.pressed.s]);

  useEffect(() => {
    selector.userInput.pressed.a
      ? changePlayerSptiteAnimation(selector.player.animationTypes.left)
      : changePlayerSptiteAnimation(selector.player.animationTypes.waitLeft);
  }, [selector.userInput.pressed.a]);

  useEffect(() => {
    selector.userInput.pressed.d
      ? changePlayerSptiteAnimation(selector.player.animationTypes.right)
      : changePlayerSptiteAnimation(selector.player.animationTypes.waitRight);
  }, [selector.userInput.pressed.d]);
};

export default useGameLoop;
