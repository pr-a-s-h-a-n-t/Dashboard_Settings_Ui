let allChannels = [];

export const MapChannelsReducer = (state = [], action) => {
  //   console.log(action.payload, "action .payload for all channels");
  switch (action.type) {
    case "FetchAll_Channels":
      return { allChannels: action.payload };

    case "Update_Primary_Channels":
      return { allChannels: action.payload };

    case "Update_Reference_Channels":
      return { allChannels: action.payload };

    case "Toggle_Backup_Channels":
      return { allChannels: action.payload };

    case "Add_Backup_Channels":
      return { allChannels: action.payload };

    case "Delete_Backup_Channels":
      return { allChannels: action.payload };

    case "Update_Backup_Channels_Primary_Channels":
      return { allChannels: action.payload };

    case "Update_Backup_Channels_Reference_Channels":
      return { allChannels: action.payload };

    default:
      return state;
  }
};
