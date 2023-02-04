import { ChannelsData } from "../../components/common/JsonData/schema";

let additionalSettings = ChannelsData.optionals[0];

let options1 = Object.keys(additionalSettings)[0];
let options2 = Object.keys(additionalSettings)[1];

let settings = {
  options1: additionalSettings.optional1,
  options2: additionalSettings.optional1,
};
export const AdditionalSettingsReducer = (state = [], action) => {
  switch (action.type) {
    case "Update_Additional_Settings":
      // console.log("reducer is received option value------------>", action.payload)

    return { aadsettings:  action.payload };

      case "Update_Additional_Settings_options1":
      // console.log("reducer is received option value------------>", action.payload)

      return { adsettings: { ...action.payload} };

      

    default:
      return state;
  }
};
