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
            {ChannelsData.channels.map((column, index) => {
              return (
                <div>
                  <div className="table-row" key={index}>
                    <div>{column}</div>
                    <div className="channels-select-container">
                      {/* <label className=" mapChannel-label">Edit Channel</label> */}
                      <div>
                        <CustomDropDown
                          required={true}
                          dropDownList={primaryChannel}
                          val={values.primaryChannel}
                          onChange={(data) =>
                            setValues({ ...values, primaryChannel: data })
                          }
                        />
                      </div>

                      {/* <label className=" refChannel-label">Edit Channel</label> */}
                      <div>
                        <CustomDropDown
                          required={true}
                          dropDownList={referenceChannel}
                          val={values.refChannel}
                          onChange={(data) =>
                            setValues({ ...values, refChannel: data })
                          }
                        />
                      </div>

                      <div>
                        <Button
                          variant="outlined"
                          onClick={() => setBackupChannel(!backupChannel)}
                          sx={{
                            width: "fit-content",
                            height: "21px",
                            fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: " 500",
                            fontSize: "16px",
                            lineHeight: "21px",
                            // display: "flex",
                            alignItems: " center",
                            color: " #2F7EC7",
                          }}
                        >
                          Hide backup channels (0)
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="additional-backupChannel-container">
                    {backupChannel ? (
                      <div style={{}}>
                        <div  >
                         { addBackUpChannelSelect.length != 0 && addBackUpChannelSelect.length > 0 ?
                          addBackUpChannelSelect.map((item, i) => {
                           return  <div className="backup-channels" key={i}>
                            <div>
                              <FormControl sx={{ width: "100%" }}>
                                <Select
                                  fullWidth
                                  size="small"
                                  label="Select"
                                  sx={{
                                    width: "274px",
                                    height: "40px",
                                    border: "1px solid black",
                                  }}
                                  // disabled={disabled}
                                  // required={required}
                                  id="demo-simple-select"
                                  // value={val}
                                  // onChange={handleChange}
                                >
                                  {dropDownListItem.map((item, id) => (
                                    <MenuItem key={id} value={item.value}>
                                      {item.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                            <div>
                              <FormControl sx={{ width: "100%" }}>
                                <Select
                                  fullWidth
                                  size="small"
                                  label="Select"
                                  sx={{
                                    width: "274px",
                                    height: "40px",
                                    border: "1px solid black",
                                  }}
                                  // disabled={disabled}
                                  // required={required}
                                  id="demo-simple-select"
                                  // value={val}
                                  // onChange={handleChange}
                                >
                                  {dropDownListItem.map((item, id) => (
                                    <MenuItem key={id} value={item.value}>
                                      {item.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                            <div>
                            <Button>Delete</Button>
                          </div>
                          </div>
                          })
                            
                          : " "
                          }

                           
                        </div>
                        <div className="backup-channels-btn">
                          <button
                            variant="outlined"
                            onClick={() =>
                              setAddBackUpChannelSelect((prev) => [...prev, "1"])
                            }
                            // sx={{
                            //   width: "fit-content",
                            //   height: "21px",
                            //   fontFamily: "DM Sans",
                            //   fontStyle: "normal",
                            //   fontWeight: " 500",
                            //   fontSize: "16px",
                            //   lineHeight: "21px",
                            //   // display: "flex",
                            //   alignItems: " center",
                            //   color: " #2F7EC7",
                            // }}
                          >
                            +Add backup channels
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}

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
