export const SET_USER_INPUT_PLESSED = "SET_USER_INPUT_PLESSED";
export const setUserInputPlessed = (pressed) => {
  return {
    type: SET_USER_INPUT_PLESSED,
    payload: {
      pressed,
    },
  };
};
export const SET_USER_INPUT_DISABLED = "SET_USER_INPUT_DISABLED";
export const setUserInputDisabled = (disabled) => {
  return {
    type: SET_USER_INPUT_DISABLED,
    payload: {
      disabled,
    },
  };
};
