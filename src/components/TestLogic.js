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
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const primaryChannelOption = [
  { value: "", label: "Select" },
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

export const referenceChannel = [
  { id: 1, value: "", label: "N/A" },
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
  "channel- 11",
];

export default function TestLogic() {
  const [primaryChannel, setPrimaryChannel] = React.useState("");
  const [refChannel, setrefChannel] = React.useState("");
  const [addBackupChannel, setAddBackupChannel] = React.useState([]);
  const [addChannel, setAddChannel] = React.useState([]);

  const test = React.useRef(false);
  const [selectedChannel, setSelectedChannel] = React.useState([]);

  useEffect(() => {
    if (channelData) {
      const allChannels = channelData.map((ch) => {
        return {
          channelName: ch,
          primaryChannel: "",
          refChannel: "",
          showBackUp: false,
          // addBackupCh: [""],
        };
      });
      // console.log("channelData==", allChannels);

      setSelectedChannel(allChannels);
      setAddBackupChannel(allChannels);
      setAddChannel(allChannels);
      test.current = allChannels;

      // console.log("addbackUpChannels==", addBackupChannel);

      // ---------><-------------//
    }
  }, [channelData]);

  const findChannel = (channelId) => {
    console.log("====>", channelId);
    let data = [...addBackupChannel];
    data[channelId].showBackUp = !test.current[channelId].showBackUp;
    setSelectedChannel(data);
    console.log("addbackUpChannels==", addBackupChannel);
    test.current = addBackupChannel;
    console.log(
      `${test.current[channelId].channelName} toggle drawer`,
      test.current[channelId].showBackUp
    );
  };

  const handleChangePrimary = (value, index) => {
    // setPrimaryChannel(event.target.value);
    let data = [...selectedChannel];
    data[index].primaryChannel = value;
    setSelectedChannel(data);

    // console.log(value,index);
  };
  const handleChangeref = (value, index) => {
    // setrefChannel(event.target.value);
    // console.log(value,index);
    let data = [...selectedChannel];
    data[index].refChannel = value;
    setSelectedChannel(data);
  };
  const addChannels = (index) => {
    // console.log("added " ,index);

    let data = [...addChannel];
    test.current[index].addBackupCh.push = "+1";
    data[index].addBackupCh.push = "+1";
    setAddChannel(data);
    console.log("added channels===>", addChannel);
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
                  onChange={(e) => handleChangePrimary(e.target.value, id)}
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
                  onChange={(e) => handleChangeref(e.target.value, id)}
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
              {test.current[id].showBackUp === true ? (
                <Grid
                  container
                  // xs={12}
                  sx={{
                    border: "2px solid aquamarine",
                    background: "silver",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //  margin: "auto"
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        border: "2px solid red",
                        background: "silver",
                      }}
                    >
                      <Select
                        value={ch.primaryChannel}
                        // onChange={(e) => handleChangePrimary(e.target.value, id)}
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
                      xs={5}
                      sx={{
                        border: "2px solid red",
                        background: "silver",
                        //  margin: "auto"
                      }}
                    >
                      <Select
                        value={ch.refChannel}
                        // onChange={(e) => handleChangeref(e.target.value, id)}
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
                      xs={2}
                      sx={{
                        border: "2px solid red",
                        background: "silver",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          addChannels("-1");
                        }}
                      >
                        {" "}
                        <DeleteIcon />
                        Delete{" "}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      item
                    >
                      <Button
                        onClick={() => {
                          addChannels(id);
                        }}
                      >
                        + Add backup channels
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
