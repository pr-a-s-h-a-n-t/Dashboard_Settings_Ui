import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./BottomNav.css";

function BottomBav({ setStepperValue, stepperValue }) {
  let btnRef = useRef(false);
  const [val, setVal] = useState(false);
  const NavigateToNextPage = () => {
    if (stepperValue === 0) {
      console.log("NavigateToNextPage stepper value initial: " + stepperValue);
      setStepperValue(stepperValue + 1);
      console.log("NavigateToNextPage stepper value after: " + stepperValue);
    } else if (stepperValue === 1) {
      setStepperValue(stepperValue + 1);
    }
  };
  const NavigateToPreviousPage = () => {
    if (stepperValue === 2) {
      setStepperValue(stepperValue - 1);
    } else if (stepperValue === 1) {
      setStepperValue(stepperValue - 1);
    }
  };
  const stepperValueCheck = (stepperValue) => {
    if (stepperValue === 0) {
      // btnRef.current = true;
      setVal(!val);
    } else if (stepperValue >= 1) {
      // btnRef.current = true;
      setVal(false);
    }

    console.log("Stepper value check function finish running");
  };

  useEffect(() => {
    console.log("NavigateToNextPage stepper value useeffect: " + stepperValue);
    stepperValueCheck(stepperValue);
    console.log("btnRef value: ", btnRef.current);
  }, [stepperValue]);

  return (
    <div className="bottomnav-container">
      <div className="bottomnavcontainer-element-start">
        <span>
          <button
            disabled={val}
            className={stepperValue >= 1 ? "btn" : "disable-btn"}
            onClick={() => NavigateToPreviousPage()}
          >
            Back
          </button>
        </span>
        <span id="cancel-montage">
          <button
            className="btn"
            //  className="disable-btn"
          >
            Cancel Montage
          </button>
        </span>
      </div>
      <div className="bottomnav-container-element-end">
        <button
          className="btn"
          variant="contained"
          sx={{}}
          onClick={() => NavigateToNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BottomBav;
