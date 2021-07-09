import React, { useContext, useCallback, useEffect } from "react";
import AppContext from "../container/contexts/AppContext";

import {
  PLAYER_MOVE_LEFT,
  PLAYER_MOVE_RIGHT,
  PLAYER_MOVE_TOP,
  PLAYER_MOVE_BOTTOM
} from "../container/actions/playerMove";

const InputFromKeyboard = () => {
  const { dispatch } = useContext(AppContext);
  const keybordEvent = useCallback((event) => {
    switch (event.key) {
      case "w":
        dispatch({ type: PLAYER_MOVE_TOP });
        break;
      case "s":
        dispatch({ type: PLAYER_MOVE_BOTTOM });
        break;
      case "a":
        dispatch({ type: PLAYER_MOVE_LEFT });
        break;
      case "d":
        dispatch({ type: PLAYER_MOVE_RIGHT });
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
