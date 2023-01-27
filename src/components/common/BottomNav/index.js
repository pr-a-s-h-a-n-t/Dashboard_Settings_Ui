import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./BottomNav.css";

function BottomBav() {
  const [disable, setDisable] = useState("disable-btn");
  return (
    <div className="bottomnav-container">
      <div className="bottomnavcontainer-element-start">
        <span>
          <button className={disable}>Back</button>
        </span>
        <span id="cancel-montage">
          <button className="disable-btn">Cancel Montage</button>
        </span>
      </div>
      <div className="bottomnav-container-element-end">
        <button className="btn" variant="contained" sx={{}}>
          Next
        </button>
      </div>
    </div>
  );
}

export default BottomBav;
