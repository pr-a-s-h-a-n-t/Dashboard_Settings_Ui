import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./BottomNav.css";

function BottomBav({setStepperValue, stepperValue}) {
  const [disable, setDisable] = useState("disable-btn");

const NavigateToNextPage = () =>{
  if(  stepperValue === 0){
    setStepperValue(stepperValue + 1);
  

  }
  else if( stepperValue === 1){
    setStepperValue(stepperValue + 1);


  }
}
const NavigateToPreviousPage = () =>{
  if(  stepperValue === 2){
    setStepperValue(stepperValue - 1);
 

  }
  else if( stepperValue === 1){
    setStepperValue(stepperValue - 1);

  }
}


  return (
    <div className="bottomnav-container">
      <div className="bottomnavcontainer-element-start">
        <span>
          <button className={disable}
          onClick={() => NavigateToPreviousPage()}
          >Back</button>
        </span>
        <span id="cancel-montage">
          <button className="disable-btn">Cancel Montage</button>
        </span>
      </div>
      <div className="bottomnav-container-element-end">
        <button className="btn" variant="contained" 
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
