


export const UpdateAdditionalSettings = ( Settings ) => (dispatch, getState) => {
    const {
      AllChannels: { additionalsettings  },
    } = getState();
  console.log( 'UpdateAdditionalSettings', Settings," additionalsettings", Settings );
    
  
    dispatch({
      type: "Update_Additional_Settings",
      payload: Settings,
    });
  };
  