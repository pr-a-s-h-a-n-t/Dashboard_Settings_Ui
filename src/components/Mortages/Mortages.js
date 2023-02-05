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
import {
  SavedAdditionalSettings,
  UpdateAdditionalSettings,
 
} from "../../store/actionCreater/AdditionalSettingsActions";
 

function Mortages() {
  const dispatch = useDispatch();
  const StepperValue = useSelector((state) => state.StepperValue);
  const { steppervalue } = StepperValue;

  useEffect(() => {
    let savedAdSettings = JSON.parse(localStorage.getItem("adsettings"));
    
    if (savedAdSettings) {
      dispatch(SavedAdditionalSettings(savedAdSettings));
    } else {
      dispatch(UpdateAdditionalSettings());
    }
  }, [dispatch]);

  return (
    <div className="udf-container">
      <Grid sx={{}} item>
        <div className="sidenavbarcontainer">
          <SideNavBar />
        </div>
      </Grid>

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
