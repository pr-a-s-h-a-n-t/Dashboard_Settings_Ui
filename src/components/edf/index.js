import React, { useRef, useState } from "react";
import "./edf.css";
import edfLogo from "../../assets/edfupload/edfLogo.png";
import { Grid } from "@mui/material";

function Upload() {
  let inputRef = React.createRef();
  const [uploadLoading, setUploadLoading] = useState(0);
  const [edf, setEdf] = useState(null);

  const uploadLogo = (e) => {
    let file = e.target.files[0];
    setUploadLoading(1);
    setEdf(file);
  };

  return (
    <Grid container>
      <Grid item lg={12}>
        <div className="upload-edfs-conatainer">
          <div className="edfs-upload">
            <div className="upload">
              <img width=" 100px" height=" 100px" src={edfLogo} alt="edfLogo" />

              <input
                accept="pdf/*"
                style={{
                  display: "none",
                }}
                ref={inputRef}
                type={"file"}
                onChange={(e) => uploadLogo(e)}
              />
              <button id="upload-btn" onClick={() => inputRef.current.click()}>
                Browse Files
              </button>
              <h5>or drop files here</h5>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Upload;
