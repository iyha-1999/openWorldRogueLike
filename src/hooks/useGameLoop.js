import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayerCurrentAnimationType,
  setAnimationPlaying,
} from "../store/ducks/player/operations";

const useGameLoop = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selector.userInput.pressed.w) {
      dispatch(setAnimationPlaying(false));
      dispatch(
        setPlayerCurrentAnimationType(selector.player.animationTypes.top)
      );
      dispatch(setAnimationPlaying(true));
    }
  }, [selector.userInput.pressed.w]);

  useEffect(() => {
    if (selector.userInput.pressed.s) {
      dispatch(setAnimationPlaying(false));
      dispatch(
        setPlayerCurrentAnimationType(selector.player.animationTypes.bottom)
      );
      dispatch(setAnimationPlaying(true));
    }
  }, [selector.userInput.pressed.s]);

  useEffect(() => {
    if (selector.userInput.pressed.a) {
      dispatch(setAnimationPlaying(false));
      dispatch(
        setPlayerCurrentAnimationType(selector.player.animationTypes.left)
      );
      dispatch(setAnimationPlaying(true));
    }
  }, [selector.userInput.pressed.a]);

  useEffect(() => {
    if (selector.userInput.pressed.d) {
      dispatch(setAnimationPlaying(false));
      dispatch(
        setPlayerCurrentAnimationType(selector.player.animationTypes.right)
      );
      dispatch(setAnimationPlaying(true));
    }
  }, [selector.userInput.pressed.d]);
};

export default useGameLoop;
