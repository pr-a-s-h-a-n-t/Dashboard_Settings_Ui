import React from "react";
import "./MapChannels.css";
// import schema from "../../schema.json";

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

const Ch = [
  "channel-1",
  "channel-2",
  "channel-3",
  "channel-4",
  "channel-5",
  "channel-6",
  "channel-7",
  "channel-8",
  "channel-9",
  "channel-9",
  "channel-10",
];

function MapChannels() {
  return (
    <div className="MapChannels-container">
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
      {Ch.map((column, index) => {
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
  );
}

export default MapChannels;
