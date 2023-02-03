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
import { UpdateAdditionalSettings } from "../../store/actionCreater/AdditionalSettingsActions";
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

  const { additionalsettings } = AdditionalSettings;
 
  useEffect(() => {
    let additionalSettings = ChannelsData.optionals[0];

    if (additionalSettings) {
      let options1 = Object.keys(additionalSettings)[0];
      let options2 = Object.keys(additionalSettings)[1];

      let settings = {
        options1: additionalSettings.optional1,
        options2: additionalSettings.optional1,
      };
      dispatch(UpdateAdditionalSettings(settings));
    }
  }, [dispatch]);

  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="MapChannels-container">
      <form>
        <div className="mapChannels-table">
          <div className="table-head">
            {columns.map((column, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: column.width ? column.width : "25%",
                  }}
                >
                  {column.title}
                </div>
              );
            })}
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
                    // checked={additionalsettings }
                    id={Object.keys(additionalsettings)[0]}
                    // name={Object.keys(additionalsettings)[0]}
                    // value={Object.keys(additionalsettings)[0]}
                    // onChange={(e) =>
                    //   setAddtionalOptions({ optional1: e.target.checked })
                    // }
                  />

                  <label htmlFor={Object.keys(additionalsettings)[0]}>
                    {" "}
                    {Object.keys(additionalsettings)[0]}{" "}
                  </label>
                </span>
                {/* <span>
                  <input
                    type="checkbox"
                    checked={additionalsettings.optional1}
                    id={Object.keys(additionalsettings)[1]}
                    name={Object.keys(additionalsettings)[1]}
                    value={additionalsettings.optional2}
                    // onChange={(e) =>
                    //   setAddtionalOptions({ optional2: e.target.checked })
                    // }
                  />

                  <label htmlFor={Object.keys(additionalsettings)[1]}>
                    {Object.keys(additionalsettings)[1]}
                  </label>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MapChannels;
