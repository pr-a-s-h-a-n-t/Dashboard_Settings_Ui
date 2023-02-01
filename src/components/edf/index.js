import React,{ useRef, useState } from "react";
import "./edf.css";
import edfLogo from "../../assets/edfupload/edfLogo.png";

function Upload() {
  let inputRef = React.createRef();
  const [uploadLoading, setUploadLoading] = useState(0);
  const [edf, setEdf] = useState(null);




  const uploadLogo = (e) => {
    let file = e.target.files[0];
    setUploadLoading(1);
    setEdf(file)
    // inputRef.current = edf;
    console.log("edf", edf, "==============>",inputRef.current);
    // let edfd = "dataUploaded";
    // localStorage.setItem( "edf", edfd);
    //ref(storage,'path to file',file,name)
    
    //uploadBytesResumable(storage-Ref,file)
    // const uploadTask = uploadBytesResumable(storageRef, file);

     
  };

  return (
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
            // value={" "}
            onChange={(e) => uploadLogo(e)}
          />
          <button id="upload-btn" onClick={() => inputRef.current.click()}>
            Browse Files
          </button>
          <h5>or drop files here</h5>
        </div>
         
      </div>
    </div>
  );
}

export default Upload;
