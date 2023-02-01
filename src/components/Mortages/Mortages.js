import React, { useEffect, useState } from "react";
import SideNavBar from "../common/SideNavBar";
import Stepper from "../common/Stepper";
import "./UDF.css";
import { Grid } from "@mui/material";
import BottomNav from "../common/BottomNav";

import Upload from "../edf/index";
import MapChannels from "../mapchannels";
import TopHeading from "../../components/common/TopHeading/index";

function Mortages() {
  
  const [stepperValue, setStepperValue] = useState(0);

  return (
    <div className="udf-container">
      <div className="sidenavbarcontainer">
        <SideNavBar />
      </div>
      <div>
        <TopHeading />
      </div>

      <div className="steppercontainer">
        <Stepper
          setStepperValue={setStepperValue}
          stepperValue={stepperValue}
        />
      </div>

      <div className="Upload-container">
        {stepperValue === 0 ? (
          <Upload />
        ) : (
          <MapChannels
            setStepperValue={setStepperValue}
            stepperValue={stepperValue}
          />
        )}
      </div>
      <div className="bottomnavbar-container">
        <BottomNav
          setStepperValue={setStepperValue}
          stepperValue={stepperValue}
        />
      </div>
    </div>
  );
}

export default Mortages;
