import {
  createStore,
  combineReducer,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { MapChannelsReducer } from "./reducer/MapChannelsReducer";
import { StepperReducer } from "./reducer/StepperReducer";

import {AdditionalSettingsReducer} from "./reducer/AdditionalSettingsReducer";

const reducer = combineReducers({
  // combines all the reducers

  AllChannels: MapChannelsReducer,
  StepperValue: StepperReducer,
  AdditionalSettings: AdditionalSettingsReducer,
});

//state of application.
const initialState = {};

//middleware
const middleware = [thunk];

// store;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
