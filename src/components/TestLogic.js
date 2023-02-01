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
import { ChannelsData } from "../schema";
import {
  FetchAllChannels,
  UpdatePrimaryChannels,
  UpdateReferenceChannels,
  ToggleBackupChannels,
  AddBackupChannels,
  DeleteBackupChannels,
  UpdateBackupChannelsPrimaryChannels,
  UpdateBackupChannelsReferenceChannels,
} from "../redux/actionCreater/Action";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "./common/customdropdown/CustomDropDown";
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
  { value: "", label: "N/A" },
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

export default function TestLogic() {
  const [primaryChannel, setPrimaryChannel] = React.useState("");
  const [refChannel, setrefChannel] = React.useState("");
  const [addBackupChannel, setAddBackupChannel] = React.useState([]);
  const [addChannel, setAddChannel] = React.useState([]);

  const test = React.useRef(false);
  const [selectedChannel, setSelectedChannel] = React.useState([]);

  const [backupChannelCount, setBackupChannelCount] = React.useState(0);

  // redux

  const dispatch = useDispatch();
  const AllChannels = useSelector((state) => state.AllChannels);

  const { allChannels } = AllChannels;
  console.log("---->allChannels in testLogic component", allChannels);

  // ----

  useEffect(() => {
    if (ChannelsData.channels) {
      const allChannels = ChannelsData.channels.map((ch) => {
        return {
          channelName: ch,
          primaryChannel: "",
          refChannel: "",
          showBackUp: false,
          addBackupCh: [],
        };
      });
      // console.log("channelData==", allChannels);

      dispatch(FetchAllChannels(allChannels));
      // setSelectedChannel(allChannels);
      // setAddBackupChannel(allChannels);
      // setAddChannel(allChannels);
      // test.current = allChannels;

      // console.log("addbackUpChannels==", addBackupChannel);

      // ---------><-------------//
    }
  }, [ChannelsData.channels, dispatch]);

  const findChannel = (channelId) => {
    dispatch(ToggleBackupChannels(channelId));
    // console.log("====>", channelId);

    // let data = [...addBackupChannel];
    // data[channelId].showBackUp = !test.current[channelId].showBackUp;
    // setSelectedChannel(data);
    // console.log("addbackUpChannels==", addBackupChannel);
    // test.current = addBackupChannel;
    // console.log(
    //   `${test.current[channelId].channelName} toggle drawer`,
    //   test.current[channelId].showBackUp
    // );
  };

  const handleChangePrimary = (value, index) => {
    dispatch(UpdatePrimaryChannels(value, index));
    // setPrimaryChannel(event.target.value);

    // let data = [...selectedChannel];
    // data[index].primaryChannel = value;
    // setSelectedChannel(data);

    // console.log(value,index);
  };
  const handleChangeref = (value, index) => {
    dispatch(UpdateReferenceChannels(value, index));
    // setrefChannel(event.target.value);
    // console.log(value,index);

    // let data = [...selectedChannel];
    // data[index].refChannel = value;
    // setSelectedChannel(data);
  };

  const addChannels = (index) => {
    dispatch(AddBackupChannels(index));
    // console.log(`${test.current[index].channelName}  index`, index);
    // let data = [...test.current[index].addBackupCh];
    // test.current[index].addBackupCh = [
    //   ...data,
    //   {
    //     // backupChannelNumber:" ",
    //     primaryChannel: "",
    //     refChannel: "",
    //   },
    // ];
    // setAddChannel(data);
    // console.log("added channels===>", addChannel);
    // console.log(
    //   `${test.current[index].channelName} added Backup Channels`,
    //   test.current[index].addBackupCh.length
    // );

    // console.log("added Backup Channels", test.current);
  };

  const handleChangePrimaryBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsPrimaryChannels(value, index, id));
    // let data = [...test.current[index].addBackupCh];

    // let data = [...selectedChannel];
    // data[id].addBackupCh[index].backupChannelNumber = index + 1;
    // data[id].addBackupCh[index].primaryChannel = value;
    // setSelectedChannel(data);
    // console.log(
    //   `Backup Channels- ${data[id].addBackupCh[index].backupChannelNumber} primaryChannel Value    `,
    //   data[id].addBackupCh[index].primaryChannel
    // );
  };

  const handleChangerefBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsReferenceChannels(value, index, id));
    // let data = [...selectedChannel];

    // data[id].addBackupCh[index].backupChannelNumber = index + 1;
    // data[id].addBackupCh[index].refChannel = value;
    // setSelectedChannel(data);
    // console.log(
    //   ` Backup Channels- ${data[id].addBackupCh[index].backupChannelNumber} refChannel Value    `,
    //   data[id].addBackupCh[index].refChannel
    // );
  };

  const handleRemoveBackUpChannels = (index, id) => {
    dispatch(DeleteBackupChannels(index, id));
    // let data = [...selectedChannel];
    // console.log(
    //   "array before deleting element  ",
    //   test.current[id].addBackupCh
    // );

    // console.log(
    //   "delete this index object",
    //   test.current[id].addBackupCh[index]
    // );
    // delete(test.current[id].addBackupCh[index]);
    // const filterredBackupChannels = test.current[id].addBackupCh.filter(
    //   (el, i) => {
    //     if (el) {
    //       return i !== index;
    //     }
    //   }
    // );
    // data[id].addBackupCh = filterredBackupChannels;
    // setAddChannel(data);
    // console.log("----------->", filterredBackupChannels);
    // console.log(
    //   "new array after deleting element  ",
    //   test.current[id].addBackupCh
    // );
  };

  return (
    <Box sx={{ m: 8 }}>
      <Grid container spacing={1}>
        {allChannels && allChannels.length > 0 ? (
          allChannels.map((ch, id) => {
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
                  <CustomDropDown
                    dropDownList={primaryChannelOption}
                    value={ch.primaryChannel}
                    // onChange={(data) =>
                    //   setValues({ ...values, primaryChannel: data })
                    // }
                    onChange={(data) => handleChangePrimary(data, id)}
                  />
                  {/* <Select
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
                  </Select> */}
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
                  <CustomDropDown
                    dropDownList={referenceChannel}
                    value={ch.refChannel}
                    // onChange={(data) =>
                    //   setValues({ ...values, primaryChannel: data })
                    // }
                    onChange={(data) => handleChangeref(data, id)}
                  />
                  {/* <Select
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
                  </Select> */}
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
                    {allChannels[id].showBackUp === true
                      ? `hide Backup Channels (${backupChannelCount})`
                      : "Add Backup Channels"}
                  </Button>
                </Grid>
                {allChannels[id].showBackUp === true ? (
                  <Grid
                    container
                    // xs={12}
                    sx={{
                      border: "2px solid aquamarine",
                      background: "silver",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "5px",
                    }}
                  >
                    {allChannels[id].addBackupCh &&
                    allChannels[id].addBackupCh.length > 0
                      ? allChannels[id].addBackupCh.map((ch, index) => {
                          return (
                            <Grid
                              container
                              margin="auto"
                              sx={{
                                border: "2px solid red",
                                background: "silver",
                              }}
                              key={index}
                            >
                              <Grid
                                item
                                xs={5}
                                sx={{
                                  border: "2px solid red",
                                  background: "silver",
                                }}
                              >
                                {" "}
                                <CustomDropDown
                                  dropDownList={primaryChannelOption}
                                  value={ch.primaryChannel}
                                  // onChange={(data) =>
                                  //   setValues({ ...values, primaryChannel: data })
                                  // }
                                  onChange={(data) =>
                                    handleChangePrimary(data, id)
                                  }
                                />
                                {/* <Select
                                  value={ch.primaryChannel}
                                  onChange={(e) =>
                                    handleChangePrimaryBackUpChannel(
                                      e.target.value,
                                      index,
                                      id
                                    )
                                  }
                                  displayEmpty
                                  fullWidth
                                  inputProps={{
                                    "aria-label": "Without label",
                                  }}
                                >
                                  {primaryChannelOption.map((option, i) => (
                                    <MenuItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </Select> */}
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
                                <CustomDropDown
                                  dropDownList={referenceChannel}
                                  value={ch.refChannel}
                                  // onChange={(data) =>
                                  //   setValues({ ...values, primaryChannel: data })
                                  // }
                                  onChange={(data) => handleChangeref(data, id)}
                                />
                                {/* <Select
                                  value={ch.refChannel}
                                  onChange={(e) =>
                                    handleChangerefBackUpChannel(
                                      e.target.value,
                                      index,
                                      id
                                    )
                                  }
                                  displayEmpty
                                  fullWidth
                                  inputProps={{
                                    "aria-label": "Without label",
                                  }}
                                >
                                  {referenceChannel.map((option) => (
                                    <MenuItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </Select> */}
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
                                    handleRemoveBackUpChannels(index, id);
                                    // console.log(`channelId: ${id} --> channel index: ${index}`);
                                  }}
                                >
                                  {" "}
                                  <DeleteIcon />
                                  Delete{" "}
                                </Button>
                              </Grid>
                            </Grid>
                          );
                        })
                      : ""}
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
          })
        ) : (
          <Grid container>
            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No channels available
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
