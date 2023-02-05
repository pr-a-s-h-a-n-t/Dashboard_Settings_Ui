export const AdditionalSettingsReducer = (state = [], action) => {
  switch (action.type) {
    case "Saved_Additional_Settings":
      return { adsettings: [...action.payload] };

    case "Update_Additional_Settings":
      return { adsettings: [action.payload] };

    case "Update_Additional_Settings_options1":
      return { adsettings: [...action.payload] };

    case "Update_Additional_Settings_options2":
      return { adsettings: [...action.payload] };

    default:
      return state;
  }
};
