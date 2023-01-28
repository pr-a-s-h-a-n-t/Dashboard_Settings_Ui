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

function MapChannels() {
  const [values, setValues] = useState({
    primaryChannel: "",
    refChannel: "",
  });
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
                  style={{
                    width: column.width ? column.width : "25%",
                  }}
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
          </div>
        </div>
        <div className="additional-setting-contianer">
          <div className="additional-setting-contianer-item">
            Additional Settings
          </div>
          <div className="additional-setting-contianer-item">
            <span>
              <input
                type="checkbox"
                id="Spindle"
                name="Spindle"
                value="Spindle"
              />
              <label htmlFor="Spindle"> Spindle</label>
            </span>
            <span>
              <input
                type="checkbox"
                id="Artifacts"
                name="Artifacts"
                value="Artifacts"
              />
              <label htmlFor="Artifacts"> Artifacts</label>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MapChannels;
