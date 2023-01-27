import React from "react";
import "./Stepper.css";

export default function Stepper() {
  return (
    <div className="stepper-container">
      <div className="stepper-elements">
        <span>1</span>
      </div>

      <div className="stepper-elements">
        <span>2</span>
      </div>

      <div className="stepper-elements">
        <span>3</span>
      </div>
    </div>
  );
}
