
export const AdditionalSettingsReducer = (state = {additionalsettings:""}   , action) => {
  
    switch (action.type) {
      case " Update_Additional_Settings":
  console.log("reducer is received------------>", action.payload)

        return { additionalsettings: action.payload };

      default:
        return state;
    }
  };
  