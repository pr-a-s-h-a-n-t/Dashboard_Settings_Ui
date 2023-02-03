 let steppervalue = 0;
export const StepperReducer = (state  =1 , action) => {
  switch (action.type) {
    case "Increment_Stepper_Value":
      return { steppervalue: action.payload };

    case "Decrement_Stepper_Value":
      return { steppervalue: action.payload };

    default:
      return state;
  }
};
