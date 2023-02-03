export const FetchAllChannels = (Channels) => (dispatch) => {
  dispatch({
    type: "FetchAll_Channels",
    payload: Channels,
  });
};

export const UpdatePrimaryChannels = (value, index) => (dispatch, getState) => {
  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  data[index].primaryChannel = value;

  localStorage.setItem("MapChannelsData", JSON.stringify(data));

  dispatch({
    type: "Update_Primary_Channels",
    payload: data,
  });
};

export const UpdateReferenceChannels =
  (value, index) => (dispatch, getState) => {
    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];
    data[index].refChannel = value;
    localStorage.setItem("MapChannelsData", JSON.stringify(data));

    dispatch({
      type: "Update_Reference_Channels",
      payload: data,
    });
  };

export const ToggleBackupChannels = (channelId) => (dispatch, getState) => {
  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  let temp = data[channelId].showBackUp;
  data[channelId].showBackUp = !temp;
  localStorage.setItem("MapChannelsData", JSON.stringify(data));

  dispatch({
    type: "Toggle_Backup_Channels",
    payload: data,
  });
};

export const AddBackupChannels = (index) => (dispatch, getState) => {
  const {
    AllChannels: { allChannels },
  } = getState();

  let initialChannel = [...allChannels[index].backupChannels];

  let data = [...allChannels];
  data[index].backupChannels = [
    ...initialChannel,
    {
      primaryChannel: "",
      refChannel: "",
    },
  ];
  localStorage.setItem("MapChannelsData", JSON.stringify(data));

  dispatch({
    type: "Add_Backup_Channels",
    payload: data,
  });
};

export const DeleteBackupChannels = (index, id) => (dispatch, getState) => {
  const {
    AllChannels: { allChannels },
  } = getState();

  let data = [...allChannels];
  const filteredBackupChannels = data[id].backupChannels.filter((el, i) => {
    if (el) {
      return i !== index;
    }
  });

  data[id].backupChannels = [...filteredBackupChannels];
  localStorage.setItem("MapChannelsData", JSON.stringify(data));

  dispatch({
    type: "Delete_Backup_Channels",
    payload: data,
  });
};

export const UpdateBackupChannelsPrimaryChannels =
  (value, index, id) => (dispatch, getState) => {
    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];

    data[id].backupChannels[index].primaryChannel = value;
    localStorage.setItem("MapChannelsData", JSON.stringify(data));

    dispatch({
      type: "Update_Backup_Channels_Primary_Channels",
      payload: data,
    });
  };

export const UpdateBackupChannelsReferenceChannels =
  (value, index, id) => (dispatch, getState) => {
    const {
      AllChannels: { allChannels },
    } = getState();

    let data = [...allChannels];

    data[id].backupChannels[index].refChannel = value;
    localStorage.setItem("MapChannelsData", JSON.stringify(data));

    dispatch({
      type: "Update_Backup_Channels_Reference_Channels",
      payload: data,
    });
  };
