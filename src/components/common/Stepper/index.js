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

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import "./Stepper.css";
// import { colors, createTheme, ThemeProvider } from "@mui/material";

// const steps = ["1", "2", "3"];
// export default function StepperComponent() {
//   const theme = createTheme({
//      typography: { fontSize: 30,  },
        
//     });
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         border: "1px solid red",
//         padding: "20px",
//         // display: "flex",
//         // justifyContent: "space-around",
//         // gap: "40px",
//         alignItems: "center",
//       }}
//     >
//       {" "}
//       <ThemeProvider theme={theme}>
//         <Stepper
//           // sx={{
//           //   width: "100%",
//           //   border: "10px solid white",
//           // }}
//           activeStep={}
//           alternativeLabel
//         >
//           {steps.map((label) => (
//             <Step
//               // sx={{
//               //   // width: "100%",
//               //   border: "10px solid orange",
//               //   borderRadius: "50%",
//               // }}
//               key={label}
//             >
//               <StepLabel
//                 sx={
//                   {
//                     //  width: '100%',
//                     //  border: '10px solid green',
//                   }
//                 }
//               >
//                 {}
//               </StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//       </ThemeProvider>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4"
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  }
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3"
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const steps = ["1", "2", "3" ];

export default function StepperComponent() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      {/* <Stepper alternativeLabel   activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}  >
            <StepLabel StepIconComponent={QontoStepIcon}>{ }</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <Stepper
        // alternativeLabel
        activeStep={1}
        connector={
        <ColorlibConnector />
      }
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
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{ }</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

