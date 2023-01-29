import React, { useState } from "react";
import "./MapChannels.css";
import { ChannelsData } from "../../schema";
import CustomDropDown from "../../components/common/customdropdown/CustomDropDown";
import { primaryChannel, referenceChannel } from "../randomdata/index";

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

function MapChannels() {
  const [values, setValues] = useState({
    primaryChannel: "",
    refChannel: "",
  });

  const [additionalOptions, setAddtionalOptions] = useState({
    optional1,
    optional2,
  });
  const [isChecked, setIsChecked] = useState(false);

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
                <div
                  className="table-row"
                  key={index}
                  // style={{
                  //   width: column.width ? column.width : "25%",
                  // }}
                >
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
