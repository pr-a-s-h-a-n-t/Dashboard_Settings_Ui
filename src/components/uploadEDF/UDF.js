import React from "react";
import SideNavBar from "../common/SideNavBar";
import Stepper from "../common/Stepper";
import "./UDF.css";
import { Grid } from "@mui/material";
import BottomNav from "../common/BottomNav";


function UDF() {
  return (
    <div className="udf-container">
      <Grid container>
        <Grid item  >
          <SideNavBar />
        </Grid>
        <Grid item  >
          <Stepper />
        </Grid>
        <Grid item  >
          <BottomNav />
        </Grid>
      </Grid>
    </div>
  );
}

export default UDF;
