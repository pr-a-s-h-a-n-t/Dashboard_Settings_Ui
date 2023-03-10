import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./BottomNav.css";
import {
  IncrementStepperValue,
  DecrementStepperValue,
  CancelMortage,
} from "../../../store/actionCreater/StepperActions";

import { useDispatch, useSelector } from "react-redux";
import { Notification } from "../../utils/Notifications";
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

  const saveMortageData = () => {
    dispatch(IncrementStepperValue(StepperValue));

     Notification({
    message: "Channels configured successfully.",
    type: "success",
  });
 
  }
  return (
    <Grid container > 
    <Grid item    lg={12}
   
    >

 
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
            onClick={() => saveMortageData()}
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
    </Grid>
    </Grid>

      
  
  );
}

export default BottomBav;
