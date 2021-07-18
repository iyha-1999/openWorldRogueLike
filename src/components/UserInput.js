import React, { useEffect } from "react";
import useUserInput from "../hooks/useUserInput";

const UserInput = () => {
  const { keybordDownEvent, keybordUpEvent } = useUserInput();

  useEffect(() => {
    document.addEventListener("keydown", keybordDownEvent, false);
    document.addEventListener("keyup", keybordUpEvent, false);
  }, []);

  return <></>;
};
export default UserInput;
