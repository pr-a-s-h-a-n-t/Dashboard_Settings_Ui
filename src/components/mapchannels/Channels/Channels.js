import * as React from "react";

import { Typography, Button, Grid, Box } from "@mui/material";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChannelsData } from "../../common/JsonData/schema";
import {
  FetchAllChannels,
  UpdatePrimaryChannels,
  UpdateReferenceChannels,
  ToggleBackupChannels,
  AddBackupChannels,
  DeleteBackupChannels,
  UpdateBackupChannelsPrimaryChannels,
  UpdateBackupChannelsReferenceChannels,
} from "../../../store/actionCreater/MapChannelsActions";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "../../common/customdropdown/CustomDropDown";
import {
  primaryChannelOption,
  referenceChannelOption,
} from "../../common/JsonData/ChannelOptions";

export default function Channels() {
  const [backupChannelCount, setBackupChannelCount] = React.useState(0);

  const dispatch = useDispatch();
  const AllChannels = useSelector((state) => state.AllChannels);
  const StepperValue = useSelector((state) => state.StepperValue);

  const { allChannels } = AllChannels;
  const { steppervalue } = StepperValue;

  useEffect(() => {
    let mapchannelsdata = JSON.parse(localStorage.getItem("MapChannelsData"));
    // console.log("MapChannelsData loaded", mapchannelsdata);
    if (mapchannelsdata) {
      dispatch(FetchAllChannels(mapchannelsdata));
    } else if (ChannelsData.channels) {
      const allChannels = ChannelsData.channels.map((ch) => {
        return {
          channelName: ch,
          primaryChannel: "",
          refChannel: "",
          showBackUp: false,
          backupChannels: [],
        };
      });
      // console.log("Channels are", allChannels);
      dispatch(FetchAllChannels(allChannels));
    }
  }, [ChannelsData.channels, dispatch]);

  const findChannel = (channelId) => {
    dispatch(ToggleBackupChannels(channelId));
  };

  const handleChangePrimary = (value, index) => {
    dispatch(UpdatePrimaryChannels(value, index));
  };
  const handleChangeref = (value, index) => {
    dispatch(UpdateReferenceChannels(value, index));
  };

  const addChannels = (index) => {
    dispatch(AddBackupChannels(index));
  };

  const handleChangePrimaryBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsPrimaryChannels(value, index, id));
  };

  const handleChangerefBackUpChannel = (value, index, id) => {
    dispatch(UpdateBackupChannelsReferenceChannels(value, index, id));
  };

  const handleRemoveBackUpChannels = (index, id) => {
    dispatch(DeleteBackupChannels(index, id));
  };

  const editChannels = (index, id) => {
    console.log("editChannels", index, id);
  };

  const openEditOptions = (index, id) => {};

  return (
    <Box sx={{ m: 3 }}>
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
                    onChange={(data) => handleChangePrimary(data, id)}
                  />
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
                    dropDownList={referenceChannelOption}
                    value={ch.refChannel}
                    onChange={(data) => handleChangeref(data, id)}
                  />
                </Grid>
                {/* <Grid item > */}
                {steppervalue < 2 ? (
                  <Grid
                    item
                    xs={2.5}
                    sx={{
                      border: "2px solid red",
                      background: "brown",
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
                        ? `hide Backup Channels (${allChannels[id].backupChannels.length})`
                        : "Add Backup Channels"}
                    </Button>
                  </Grid>
                ) : (
                  ""
                )}
                {/* </Grid> */}

                {allChannels[id].showBackUp === true ? (
                  <Grid
                    container
                    // xs={12}
                    // sx={{
                    //   border: "2px solid aquamarine",
                    //   background: "silver",
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   margin: "5px",
                    // }}
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
                      <Typography p> Backup Channels</Typography>
                    </Grid>

                    <Grid xs={steppervalue < 2 ? 10 : 7} item>
                      {allChannels[id].backupChannels &&
                      allChannels[id].backupChannels.length > 0
                        ? allChannels[id].backupChannels.map((ch, index) => {
                            return (
                              <Grid
                                container
                                rowGap={2}
                                // margin="auto"
                                sx={{
                                  border: "2px solid red",
                                  background: "blue",
                                }}
                                key={index}
                              >
                                <Grid
                                  item
                                  xs={4.2}
                                  sx={{
                                    border: "2px solid red",
                                    background: "silver",
                                  }}
                                >
                                  <CustomDropDown
                                    dropDownList={primaryChannelOption}
                                    value={ch.primaryChannel}
                                    onChange={(data) =>
                                      handleChangePrimaryBackUpChannel(
                                        data,
                                        index,
                                        id
                                      )
                                    }
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs={4.2}
                                  // ml={2}
                                  sx={{
                                    border: "2px solid red",
                                    background: "silver",
                                    //  margin: "auto"
                                  }}
                                >
                                  <CustomDropDown
                                    dropDownList={referenceChannelOption}
                                    value={ch.refChannel}
                                    onChange={(data) =>
                                      handleChangerefBackUpChannel(
                                        data,
                                        index,
                                        id
                                      )
                                    }
                                  />
                                </Grid>
                                {steppervalue < 2 ? (
                                  <Grid
                                    item
                                    xs={1.5}
                                    m="auto"
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
                                      }}
                                    >
                                      {" "}
                                      <DeleteIcon />
                                      Delete{" "}
                                    </Button>
                                  </Grid>
                                ) : (
                                  ""
                                )}
                              </Grid>
                            );
                          })
                        : ""}
                    </Grid>
                    {steppervalue === 2 ? (
                      <Grid
                        item
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "auto",
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => openEditOptions(id)}
                          sx={{}}
                        >
                          Edit Channel
                        </Button>
                      </Grid>
                    ) : (
                      ""
                    )}
                    {steppervalue < 2 ? (
                      <Grid container>
                        <Grid
                          xs={2.5}
                          ml="14%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottom: "5px solid blue",
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
                    ) : (
                      ""
                    )}
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
