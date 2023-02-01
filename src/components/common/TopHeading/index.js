import React from "react";
import "./TopHeading.css";
import userLogo from "../../../assets/topheading/userLogo.png";


export default function TopHeading() {
  return (
    <div>
      <div className="topheadingcontainer">
        <div className="topheadingcontainer-heading">
          <p>Oura_Study</p>
        </div>
        <div className="topheadingcontainer-usercontainer">
          <span>
            <img width="30px" height="30px" src={userLogo} alt="" />
          </span>
          <span>
            <select name="user" id="user">
              <option value="Ankit Brijwasi"> Ankit Brijwasi</option>
              <option value="Prashant Mishra">Prashant Mishra</option>
              <option value="Shubh Mishra">Shubh Mishra</option>
              <option value="Ankit Jha">Ankit Jha</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
}
