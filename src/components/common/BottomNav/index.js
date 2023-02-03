import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./BottomNav.css";
import {
  IncrementStepperValue,
  DecrementStepperValue,
} from "../../../store/actionCreater/StepperActions";

import { useDispatch, useSelector } from "react-redux";

function BottomBav() {
  const dispatch = useDispatch();
  const StepperValue = useSelector((state) => state.StepperValue);
  const { steppervalue } = StepperValue;

  const NavigateToNextPage = () => {
    dispatch(IncrementStepperValue(StepperValue));
  };
  const NavigateToPreviousPage = () => {
    dispatch(DecrementStepperValue());
  };

  return (
    <div className="bottomnav-container">
      <div className="bottomnavcontainer-element-start">
        <span>
          <button
            disabled={StepperValue === 0 ? true : false}
            className={StepperValue >= 1 ? "btn" : "disable-btn"}
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
        {steppervalue === 2 ? (
          <button
            className="btn"
            variant="contained"
            sx={{}}
            onClick={() => NavigateToNextPage()}
          >
            Save
          </button>
        ) : steppervalue <= 2 ? (
          <Button
            className="btn"
            variant="contained"
            sx={{}}
            onClick={() => NavigateToNextPage()}
          >
            Next
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BottomBav;
