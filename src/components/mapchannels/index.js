import React, { useEffect, useState } from "react";
import "./MapChannels.css";
import { ChannelsData } from "../common/JsonData/schema";
import CustomDropDown from "../../components/common/customdropdown/CustomDropDown";
import {
  primaryChannel,
  referenceChannel,
} from "../common/JsonData/ChannelOptions";
import { Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Channels from "./Channels/Channels";
import {
  UpdateAdditionalSettings,
  UpdateAdditionalSettingsoptions1,
} from "../../store/actionCreater/AdditionalSettingsActions";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    title: "Channel",
    dataIndex: "Channel",
  },
  {
    title: "Primary Channel  ",
    dataIndex: "Primary Channel ",
  },
  {
    title: "Reference Channel  ",
    dataIndex: "Reference Channel  ",
  },
];

function MapChannels({}) {
  const dispatch = useDispatch();
  const AdditionalSettings = useSelector((state) => state.AdditionalSettings);
  console.log("-------------------------------->", AdditionalSettings);

  // const { settings } = AdditionalSettings;
  // console.log("-------------------------------->", settings);

  // useEffect(() => {
  //   let AdditionalSettings = ChannelsData.optionals[0];

  // if (AdditionalSettings) {
  //   let options1 = Object.keys(AdditionalSettings)[0];
  //   let options2 = Object.keys(AdditionalSettings)[1];

  //   let settings = {
  //     options1: AdditionalSettings.optional1,
  //     options2: AdditionalSettings.optional1,
  //   };
  // dispatch(UpdateAdditionalSettings( ));
  // }
  // }, [dispatch]);

  // const [isChecked, setIsChecked] = useState(false);

  // const updateAddtionalSettings = (value, option)=>{
  //   // console.log('updateAddtionalSettings',value ,"------->", option);

  //     dispatch(UpdateAdditionalSettingsoptions1(value, option));
  //     console.log('dispatch called');

  // }

  return (
    <div className="MapChannels-container">
      <form>
        <div className="mapChannels-table">
         
            <div className="table-head">
            <div className="ck">
              {columns.map((column, index) => {
                return (
                  <div
                    key={index}
                    style={{
                     
                      // backgroundColor: "red",
                      // marginLeft: "56px",
                      // width: "70%",
                      // paddingRight: "10px",
                      // marginRight: "20px",
                    }}
                  >
                    {column.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="table-row-container">
            <div>
              <Channels />
            </div>

            <div className="additional-setting-contianer">
              <div className="additional-setting-contianer-item">
                Additional Settings
              </div>
              <div className="additional-setting-contianer-item">
                <span>
                  <input
                    type="checkbox"

                    // id={Object.keys(settings)[0]}
                    // name={Object.keys(settings)[0]}
                    // value={settings.options1}
                    // onChange={(e) =>
                    //   updateAddtionalSettings(    )
                    // }
                  />

                  <label
                  // htmlFor={Object.keys(settings)[0]}
                  >
                    options1
                    {/* {Object.keys( settings)[0]} */}
                  </label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    // checked={AdditionalSettings.optional1}
                    // id={Object.keys(AdditionalSettings)[1]}
                    // name={Object.keys(AdditionalSettings)[1]}
                    // value={AdditionalSettings.optional2}
                    // onChange={(e) =>
                    //   setAddtionalOptions({ optional2: e.target.checked })
                    // }
                  />

                  <label
                  // htmlFor={Object.keys(AdditionalSettings)[1]}
                  >
                    Options2
                    {/* {Object.keys(AdditionalSettings)[1]} */}
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MapChannels;
