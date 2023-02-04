export const IncrementStepperValue = (StepperValue) => (dispatch, getState) => {
  const {
    StepperValue: { steppervalue },
  } = getState(); 
  let updateStepperValue = steppervalue + 1;
  dispatch({
    type: "Increment_Stepper_Value",
    payload: updateStepperValue,
  });
};

export const DecrementStepperValue = () => (dispatch, getState) => {
  const {
    StepperValue: { steppervalue },
  } = getState();
   

  let updateStepperValue = steppervalue - 1;

  dispatch({
    type: "Decrement_Stepper_Value",
    payload: updateStepperValue,
  });
};

export const CancelMortage = () => (dispatch) => {
  let updateStepperValue = 0;

  dispatch({
    type: "Cancel_Mortage",
    payload: updateStepperValue,
  });
};

export const EditChannels = () => (dispatch) => {
  let updateStepperValue = 1;

  dispatch({
    type: "edit_Channels",
    payload: updateStepperValue,
  });
};
