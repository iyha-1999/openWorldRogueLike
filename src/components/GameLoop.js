import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../store/ducks/player/actions";

const InputFromKeyboard = () => {
  const dispatch = useDispatch();
  const keybordEvent = useCallback((event) => {
    switch (event.key) {
      case "w":
        dispatch(Actions.playerMoveTopAction());
        break;
      case "s":
        dispatch(Actions.playerMoveBottomAction());
        break;
      case "a":
        dispatch(Actions.playerMoveLeftAction());
        break;
      case "d":
        dispatch(Actions.playerMoveRightAction());
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keybordEvent, false);
  }, []);

  return <></>;
};
export default InputFromKeyboard;
