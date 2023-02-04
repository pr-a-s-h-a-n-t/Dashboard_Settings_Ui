import React, { useEffect, useState } from "react";
import SideNavBar from "../common/SideNavBar";
import Stepper from "../common/Stepper";
import "./UDF.css";
import { Grid } from "@mui/material";
import BottomNav from "../common/BottomNav";

import Upload from "../edf/index";
import MapChannels from "../mapchannels";
import TopHeading from "../../components/common/TopHeading/index";
import { useDispatch, useSelector } from "react-redux";

function Mortages() {
  // const [stepperValue, setStepperValue] = useState(0);
  const dispatch = useDispatch();
  const StepperValue = useSelector((state) => state.StepperValue);
  const { steppervalue } = StepperValue;
  // console.log(`Stepper value in mortage: ${StepperValue}`);
  // console.log(`  value in mortage: ${steppervalue}`);

  return (
    <div className="udf-container">
      <div className="sidenavbarcontainer">
        <SideNavBar />
      </div>
      <div>
        <TopHeading />
      </div>

      <div className="steppercontainer">
        <Stepper />
      </div>

      <div className="Upload-container">
        {steppervalue === 0 ? <Upload /> : <MapChannels />}
      </div>
      {/* <Grid item sm={12} xl={12}> */}

      <div className="bottomnavbar-container">
        <BottomNav />
      </div>
      {/* </Grid> */}
    </div>
  );
}

export default Mortages;
