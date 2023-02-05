import { ChannelsData } from "../../components/common/JsonData/schema";

let additionalSettings = ChannelsData.optionals[0];

let options1 = Object.keys(additionalSettings)[0];
let options2 = Object.keys(additionalSettings)[1];

let Settings = {
  options1: additionalSettings.optional1,
  options2: additionalSettings.optional1,
};

export const SavedAdditionalSettings = (savedSettings) => (dispatch) => {
  dispatch({
    type: "Saved_Additional_Settings",
    payload: savedSettings,
  });
};

export const UpdateAdditionalSettings = () => (dispatch) => {
  dispatch({
    type: "Update_Additional_Settings",
    payload: Settings,
  });
};

export const UpdateAdditionalSettingsoptions1 =
  (value) => (dispatch, getState) => {
    const {
      AdditionalSettings: { adsettings },
    } = getState();

    let data = [...adsettings];

    data[0].options1 = !adsettings[0].options1;

    let val = [...data];
    localStorage.setItem("adsettings", JSON.stringify(val));

    dispatch({
      type: "Update_Additional_Settings_options1",
      payload: val,
    });
  };

export const UpdateAdditionalSettingsoptions2 =
  (value) => (dispatch, getState) => {
    const {
      AdditionalSettings: { adsettings },
    } = getState();

    let data = [...adsettings];

    data[0].options2 = !adsettings[0].options2;

    let val = [...data];
    localStorage.setItem("adsettings", JSON.stringify(val));

    dispatch({
      type: "Update_Additional_Settings_options2",
      payload: val,
    });
  };
