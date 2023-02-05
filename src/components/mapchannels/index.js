import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
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
  UpdateAdditionalSettingsoptions1,
  UpdateAdditionalSettingsoptions2,
} from "../../store/actionCreater/AdditionalSettingsActions";
import { useDispatch, useSelector } from "react-redux";
import { border } from "@mui/system";

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

function MapChannels() {
  const dispatch = useDispatch();
  const AdditionalSettings = useSelector((state) => state.AdditionalSettings);

  const { adsettings } = AdditionalSettings;
  const StepperValue = useSelector((state) => state.StepperValue);
  const { steppervalue } = StepperValue;

  const updateAddtionalSettings = (value) => {
    if (value === "options1") {
      dispatch(UpdateAdditionalSettingsoptions1(value));
    } else if (value === "options2") {
      dispatch(UpdateAdditionalSettingsoptions2(value));
    }
  };

  return (
    <div className="MapChannels-container">
      <form>
        <div className="mapChannels-table">
          <div className="table-head">
            <div className="ck">
              {columns.map((column, index) => {
                return <div key={index}>{column.title}</div>;
              })}
            </div>
          </div>
          <div className="table-row-container">
            <div>
              <Channels />
            </div>

            <div className="additional-setting-contianer">
              <Grid container>
                <Grid
                  sm={12}
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginLeft: "76px",
                    background: " #FFFFFF",
                    // paddingTop: " 3%",
                    paddingLeft: " 2%",
                    gap: " 40px",
                  }}
                  item
                >
                  <div className="additional-setting-contianer-item">
                    Additional Settings
                  </div>
                  <div className="additional-setting-contianer-item">
                    {steppervalue === 3 && adsettings[0].options1 === true ? (
                      <span> {Object.keys(adsettings[0])[0]}</span>
                    ) : steppervalue < 3 ? (
                      <span>
                        <input
                          type="checkbox"
                          disabled={steppervalue === 3 ? true : false}
                          checked={adsettings[0].options1}
                          value={adsettings.options1}
                          onChange={(e) =>
                            updateAddtionalSettings(
                              Object.keys(adsettings[0])[0]
                            )
                          }
                        />

                        <label htmlFor={Object.keys(adsettings[0])[0]}>
                          {Object.keys(adsettings[0])[0]}
                        </label>
                      </span>
                    ) : (
                      ""
                    )}
                    {steppervalue === 3 && adsettings[0].options2 === true ? (
                      <span> {Object.keys(adsettings[0])[1]}</span>
                    ) : steppervalue < 3 ? (
                      <span>
                        <input
                          type="checkbox"
                          disabled={steppervalue === 3 ? true : false}
                          checked={adsettings[0].options2}
                          id={Object.keys(adsettings[0])[1]}
                          value={adsettings.options1}
                          onChange={(e) =>
                            updateAddtionalSettings(
                              Object.keys(adsettings[0])[1]
                            )
                          }
                        />

                        <label htmlFor={Object.keys(adsettings[0])[1]}>
                          {/* Options2 */}
                          {Object.keys(adsettings[0])[1]}
                        </label>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MapChannels;
