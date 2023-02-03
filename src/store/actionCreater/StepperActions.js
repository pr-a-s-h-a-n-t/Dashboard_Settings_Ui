export const IncrementStepperValue = (StepperValue) => (dispatch, getState) => {
  const {
    StepperValue: { steppervalue },
  } = getState();
  console.log(`stepper value in action increment: ${StepperValue}`);
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
  console.log(`stepper value in action decrement: ${steppervalue}`);

  let updateStepperValue = steppervalue - 1;


  dispatch({
    type: "Decrement_Stepper_Value",
    payload: updateStepperValue,
  });
};
