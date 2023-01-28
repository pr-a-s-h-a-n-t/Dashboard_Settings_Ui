import React from "react";
import "./MapChannels.css";
import { ChannelsData } from "../../schema";

// export const primaryChannel = [
import { primaryChannel } from "../randomdata/index";

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
                {column}
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
