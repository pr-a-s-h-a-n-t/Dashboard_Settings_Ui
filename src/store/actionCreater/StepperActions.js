export const IncrementStepperValue = (StepperValue) => (dispatch, getState) => {
  const {
    StepperValue: { steppervalue },
  } = getState();
  console.log(`stepper value in action increment: ${StepperValue}`);

  dispatch({
    type: "Increment_Stepper_Value",
    payload: steppervalue + 1,
  });
};

export const DecrementStepperValue = () => (dispatch, getState) => {
  const {
    StepperValue: { steppervalue },
  } = getState();
  console.log(`stepper value in action decrement: ${steppervalue}`);

  let newStepperValue = steppervalue - 1;

  dispatch({
    type: "Decrement_Stepper_Value",
    payload: newStepperValue,
  });
};
