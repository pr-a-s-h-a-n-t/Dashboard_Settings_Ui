import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./BottomNav.css";
import {
  IncrementStepperValue,
  DecrementStepperValue,
  CancelMortage,
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

  const HandleMortage = () => {
    dispatch(CancelMortage());
  };

  return (
    <div className="bottomnav-container">
      <div className="bottomnavcontainer-element-start">
        <span>
          <Button
            variant="outlined"
            disabled={steppervalue === 0 ? true : false}
            className={steppervalue >= 1 ? "btn" : "disable-btn"}
            onClick={() => NavigateToPreviousPage()}
          >
            Back
          </Button>
        </span>
        <span id="cancel-montage">
          <Button
            disabled={true}
            onClick={() => HandleMortage()}
            className="disable-btn"
          >
            Cancel Montage
          </Button>
        </span>
      </div>
      <div className="bottomnav-container-element-end">
        {steppervalue === 2 ? (
          <Button
            className="btn"
            variant="contained"
            sx={{}}
            onClick={() => NavigateToNextPage()}
          >
            Save
          </Button>
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
