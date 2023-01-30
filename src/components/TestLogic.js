import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import { useForm, Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {useEffect} from "react";

export const primaryChannelOption = [
  { id: 1, value: "", label: "Select"},
  { id: 2, value: "bp1", label: "Bp1" },
  { id: 3, value: "cp1", label: "Cp1" },
];

export const referenceChannel = [
  { id: 1, value: "", label: "N/A" },
  { id: 2, value: "ar1", label: "Ar1" },
  { id: 3, value: "br1", label: "Br1" },
];

const channelData = [
  "channel- 1",
  "channel- 2",
  "channel- 3",
  "channel- 4",
  "channel- 5",
  "channel- 6",
  "channel- 7",
  "channel- 8",
  "channel- 9",
  "channel- 10",
  "channel- 11"
];
export default function TestLogic() {
  const [primaryChannel, setPrimaryChannel] = React.useState("");
  const [refChannel, setrefChannel] = React.useState("");
  
  const [selectedChannel, setSelectedChannel] = React.useState([
    // {
    //   primaryChannel: "",
    //   refChannel: "",
    // },
    // {
    //   primaryChannel: "",
    //   refChannel: "",
    // },
    // channel3: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel4: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel5: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel6: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel7: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel8: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel9: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel10: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
    // channel11: {
    //   primaryChannel: "",
    //   refChannel:"",
    // },
  ]);

  useEffect((()=>{
    if(channelData  ){
        const allChannels = channelData.map((ch) =>{
            return {
                channelName: ch,
                primaryChannel: "",
                refChannel: "",
            }
        })
        setSelectedChannel( allChannels)
    }
  }),[channelData])

  useEffect(()=>{
    console.log("seeee==",selectedChannel);
  },[selectedChannel])

  const findChannel = (option) => {
    console.log("====>", option);
  };
  const [primaryChannel2, setPrimaryChannel2] = React.useState("");
  const [refChannel2, setrefChannel2] = React.useState("");

  const handleChangePrimary = (value,index) => {
    // setPrimaryChannel(event.target.value);
    let data = [...selectedChannel];
    data[index].primaryChannel = value;
    setSelectedChannel(data);
    
    // console.log(value,index);

  };
  const handleChangeref = (value,index) => {
    // setrefChannel(event.target.value);
    // console.log(value,index);
    let data = [...selectedChannel];
    data[index].refChannel = value;
    setSelectedChannel(data);
};

  return (
    <Box sx={{ m: 8 }}>
      <Grid container spacing={1}>
        {selectedChannel.map((ch, id) => {
          return (
            <Grid
              container
              // xs={2}
              key={id}
              sx={{
                border: "2px solid red",
                mt: "6px",
                background: "silver",
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={2}
              >
                <Typography p>{ch.channelName}</Typography>
              </Grid>
              <Grid
                item
                xs={3.5}
                sx={{
                  border: "2px solid red",
                  background: "silver",
                }}
              >
                <Select
                  value={ch.primaryChannel}
                  onChange={(e) => handleChangePrimary(e.target.value,id)}
                  displayEmpty
                  fullWidth
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                >
                  {primaryChannelOption.map((option, i) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                xs={3.5}
                sx={{
                  border: "2px solid red",
                  background: "silver",
                  //  margin: "auto"
                }}
              >
                <Select
                  value={ch.refChannel}
                  onChange={(e) => handleChangeref(e.target.value,id)}
                  displayEmpty
                  fullWidth
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                >
                  {referenceChannel.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  border: "2px solid red",
                  background: "silver",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => findChannel(id)}
                  sx={{}}
                >
                  + Add Backup Channels
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
