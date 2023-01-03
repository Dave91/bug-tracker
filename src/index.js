import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";

import authReducer from "./Controllers/authSlice";
//import bugReducer from "./Controllers/Redux/bugSlice";
//import userReducer from "./Controllers/Redux/userSlice";

/* const reducer = combineReducers({
  auth: authReducer,
  bugs: "",
  user: "",
});

const store = configureStore({
  reducer,
}); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={""}>
    <App />
  </Provider>
);
