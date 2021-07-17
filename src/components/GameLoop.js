import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  playerMoveTopAction,
  playerMoveBottomAction,
  playerMoveLeftAction,
  playerMoveRightAction,
} from "../store/ducks/player/actions";

const InputFromKeyboard = () => {
  const dispatch = useDispatch();
  const keybordDownEvent = useCallback((event) => {
    switch (event.key) {
      case "w":
        dispatch(playerMoveTopAction());
        break;
      case "s":
        dispatch(playerMoveBottomAction());
        break;
      case "a":
        dispatch(playerMoveLeftAction());
        break;
      case "d":
        dispatch(playerMoveRightAction());
        break;
      default:
        break;
    }
  }, []);
  const keybordUpEvent = useCallback((event) => {
    switch (event.key) {
      case "w":
        console.log("w");
        // dispatch(playerMoveTopAction());
        break;
      case "s":
        // dispatch(playerMoveBottomAction());
        break;
      case "a":
        // dispatch(playerMoveLeftAction());
        break;
      case "d":
        // dispatch(playerMoveRightAction());
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keybordDownEvent, false);
    document.addEventListener("keyup", keybordUpEvent, false);
  }, []);

  return <></>;
};
export default InputFromKeyboard;
