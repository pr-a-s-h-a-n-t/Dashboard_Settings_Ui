import { LocalGroceryStoreOutlined } from "@mui/icons-material";
import { ChannelsData } from "../../components/common/JsonData/schema";

let additionalSettings = ChannelsData.optionals[0];

let options1 = Object.keys(additionalSettings)[0];
let options2 = Object.keys(additionalSettings)[1];

let Settings = {
  options1: additionalSettings.optional1,
  options2: additionalSettings.optional1,
};

export const UpdateAdditionalSettings =
  (value, option) => (dispatch, getState) => {
    // const {
    //   AdditionalSettings: { settings  },
    // } = getState();

    dispatch({
      type: "Update_Additional_Settings",
      payload: Settings,
    });
  };

export const UpdateAdditionalSettingsoptions1 =
  (value, option) => (dispatch, getState) => {
    const { AdditionalSettings: {aadsettings} } = getState();
    //  AdditionalSettings.map(setting =>{ })
console.log(aadsettings, "======");

let op1 = aadsettings.options1;
let op2 =  aadsettings.options2; 
console.log(op1, "======", op2);

let data = {...aadsettings};
data.options1 = !op1;

console.log( "dataaaa", data );

    dispatch({
      type: "Update_Additional_Settings_options1",
      payload: data,
    });
  };
