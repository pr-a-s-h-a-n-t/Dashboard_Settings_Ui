export const StepperReducer = (state = { steppervalue: 0 }, action) => {
  switch (action.type) {
    case "Increment_Stepper_Value":
      return { steppervalue: action.payload };

    case "Decrement_Stepper_Value":
      return { steppervalue: action.payload };

    case "Cancel_Mortage":
      return { steppervalue: action.payload };

    default:
      return state;
  }
};
