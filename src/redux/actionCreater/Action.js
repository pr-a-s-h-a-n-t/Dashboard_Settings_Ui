// import { ChannelsData } from "../../schema";

export const FetchAllChannels = (Channels) => (dispatch, getState) => {
  // console.log("FetchAllChannels in actions----->", Channels);
  const {
    AllChannels: { allChannels },
  } = getState();
  dispatch({
    type: "FetchAll_Channels",
    payload: Channels,
  });
  //   };
};

export const UpdatePrimaryChannels = (value, index) => (dispatch, getState) => {
  console.log("FetchAllChannels----->", value, index);
  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  data[index].primaryChannel = value;
  // setSelectedChannel(data);
  console.log(
    `primary channel ${data[index].channelName} updates----->`,
    data[index].primaryChannel
  );

  dispatch({
    type: "Update_Primary_Channels",
    payload: data,
  });
};

export const UpdateReferenceChannels =
  (value, index) => (dispatch, getState) => {
    console.log("FetchAllChannels----->", value, index);
    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];
    data[index].refChannel = value;
    // setSelectedChannel(data);
    console.log(
      `Reference channel ${data[index].channelName} updates----->`,
      data[index].refChannel
    );
    dispatch({
      type: "Update_Reference_Channels",
      payload: data,
    });
  };

export const ToggleBackupChannels = (channelId) => (dispatch, getState) => {
  console.log("FetchAllChannels----->", channelId);

  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  let temp = data[channelId].showBackUp;
  data[channelId].showBackUp = !temp;
  // setSelectedChannel(data);
  // console.log(`Toggle_Backup_Channels ${data[channelId].channelName} updates----->`, data[channelId].showBackUp);
  dispatch({
    type: "Toggle_Backup_Channels",
    payload: data,
  });
};

export const AddBackupChannels = (index) => (dispatch, getState) => {
  console.log("FetchAllChannels----->", index);

  const {
    AllChannels: { allChannels },
  } = getState();

  let initialChannel = [...allChannels[index].addBackupCh];
  // console.log(initialChannel,"----------->")
  let data = [...allChannels];
  data[index].addBackupCh = [
    ...initialChannel,
    {
      // backupChannelNumber:" ",
      primaryChannel: "",
      refChannel: "",
    },
  ];

  // console.log(`Toggle_Backup_Channels ${data[channelId].channelName} updates----->`, data[channelId].showBackUp);
  dispatch({
    type: "Add_Backup_Channels",
    payload: data,
  });
};

export const DeleteBackupChannels = (index, id) => (dispatch, getState) => {
  console.log("FetchAllChannels----->", index, "and ", id);

  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  const filteredBackupChannels = data[id].addBackupCh.filter((el, i) => {
    if (el) {
      return i !== index;
    }
  });
  // console.log("--------<>",filteredBackupChannels)
  data[id].addBackupCh = [...filteredBackupChannels];

  dispatch({
    type: "Delete_Backup_Channels",
    payload: data,
  });
};

export const UpdateBackupChannelsPrimaryChannels =
  (value, index, id) => (dispatch, getState) => {
    console.log("FetchAllChannels----->", index, "and ", id);

    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];

    // data[id].addBackupCh[index].backupChannelNumber = index + 1;
    data[id].addBackupCh[index].primaryChannel = value;

    dispatch({
      type: "Update_Backup_Channels_Primary_Channels",
      payload: data,
    });
  };

export const UpdateBackupChannelsReferenceChannels =
  (value, index, id) => (dispatch, getState) => {
    console.log("FetchAllChannels----->", index, "and ", id);

    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];

    // data[id].addBackupCh[index].backupChannelNumber = index + 1;
    data[id].addBackupCh[index].refChannel = value;

    dispatch({
      type: "Update_Backup_Channels_Reference_Channels",
      payload: data,
    });
  };
