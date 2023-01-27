// import React from "react";
// import "./Stepper.css";

// export default function Stepper() {
//   return (
// <div className="stepper-container">
// {
/* <div className="stepper-elements">
        <span>1</span>
      </div>

      <div className="stepper-elements">
        <span>2</span>
      </div>

      <div className="stepper-elements">
        <span>3</span>
      </div> */
// }
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Stepper.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";

const steps = ["1", "2", "3"];
export default function StepperComponent() {
  const theme = createTheme({
     typography: { fontSize: 30,  },
        
    });
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid red",
        padding: "20px",
        // display: "flex",
        // justifyContent: "space-around",
        // gap: "40px",
        alignItems: "center",
      }}
    >
      {" "}
      <ThemeProvider theme={theme}>
        <Stepper
          // sx={{
          //   width: "100%",
          //   border: "10px solid white",
          // }}
          activeStep={1}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step
              // sx={{
              //   // width: "100%",
              //   border: "10px solid orange",
              //   borderRadius: "50%",
              // }}
              key={label}
            >
              <StepLabel
                sx={
                  {
                    //  width: '100%',
                    //  border: '10px solid green',
                  }
                }
              >
                {}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>
    </Box>
  );
}
