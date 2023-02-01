import {
  createStore,
  combineReducer,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { MapChannelsReducer } from "../reducer/userReducer";

const reducer = combineReducers({
  // this combines all the reducers

  AllChannels: MapChannelsReducer,
});

//step2. create state of application.
const initialState = {};

//step3. create middleware
const middleware = [thunk];

// create store;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
