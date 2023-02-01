import React, { useEffect, useState } from "react";
import "./MapChannels.css";
import { ChannelsData } from "../../schema";
import CustomDropDown from "../../components/common/customdropdown/CustomDropDown";
import { primaryChannel, referenceChannel } from "../randomdata/index";
import { Button } from "@mui/material";

// --------------------------
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Channels from "../TestLogic";
//----------------------------

const dropDownListItem = [
  {
    value: "a1",
    label: "A1",
  },
  {
    value: "b1",
    label: "B1",
  },
  {
    value: "c1",
    label: "C1",
  },
  {
    value: "d1",
    label: "D1",
  },
  {
    value: "e1",
    label: "E1",
  },
  {
    value: "f1",
    label: "F1",
  },
  {
    value: "g1",
    label: "G1",
  },
  {
    value: "h1",
    label: "H1",
  },
  {
    value: "i1",
    label: "I1",
  },
  {
    value: "j1",
    label: "J1",
  },
  {
    value: "k1",
    label: "K1",
  },
  {
    value: "l1",
    label: "L1",
  },
];

const columns = [
  {
    title: "Channel",
    dataIndex: "Channel",
  },
  {
    title: "Primary Channel (default select)",
    dataIndex: "Primary Channel (default select)",
  },
  {
    title: "Reference Channel (default N/A)",
    dataIndex: "Reference Channel (default N/A)",
  },
];

let additionalSettings = ChannelsData.optionals[0];
// console.log("Additional settings", additionalSettings);

const { optional1, optional2 } = additionalSettings;
// console.log("Additional settings",  optional1, optional2 , "=======>");

function MapChannels({ stepperValue, setStepperValue }) {
  const [values, setValues] = useState({
    primaryChannel: "",
    refChannel: "",
  });

  const [additionalOptions, setAddtionalOptions] = useState({
    optional1,
    optional2,
  });
  let ss;
  //  ss = document.write(<CustomDropDown /> )
  const [isChecked, setIsChecked] = useState(false);
  const [backupChannel, setBackupChannel] = useState(false);
  const [addBackUpChannel, setAddBackUpChannel] = useState({
    ss: "",
  });
  let temp = [ ];
  const [addBackUpChannelSelect, setAddBackUpChannelSelect] = useState([
    ...temp,
  ]);
  console.log(addBackUpChannelSelect, "=======>");
  // useEffect(()=>{
  //   setStepperValue(1);
  // }, [])

  console.log("additional options", additionalOptions);
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
            <Channels />

            <div className="additional-setting-contianer">
              <div className="additional-setting-contianer-item">
                Additional Settings
              </div>
              <div className="additional-setting-contianer-item">
                <span>
                  <input
                    type="checkbox"
                    checked={additionalOptions.optional1}
                    id={Object.keys(additionalSettings)[0]}
                    name={Object.keys(additionalSettings)[0]}
                    value={Object.keys(additionalSettings)[0]}
                    onChange={(e) =>
                      setAddtionalOptions({ optional1: e.target.checked })
                    }
                  />

                  <label htmlFor={Object.keys(additionalSettings)[0]}>
                    {" "}
                    {Object.keys(additionalSettings)[0]}{" "}
                  </label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    checked={additionalOptions.optional2}
                    id={Object.keys(additionalSettings)[1]}
                    name={Object.keys(additionalSettings)[1]}
                    value={additionalOptions.optional2}
                    onChange={(e) =>
                      setAddtionalOptions({ optional2: e.target.checked })
                    }
                  />

                  <label htmlFor={Object.keys(additionalSettings)[1]}>
                    {Object.keys(additionalSettings)[1]}
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
