require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// sessionStorage.setItem(
//   "blueberrytoken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzN2MwM2NjNC1mODUyLTQ1OGMtYWU5MS02MjVhNGY2ZmU2ZWYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUxMTIiLCJJRFVzZXIiOiIxNTExMiIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJOYWlpICBOYWJoYW51IExhYWEiLCJwaWRSZWZGb3JFZGl0IjoiTjU2IiwiZXhwIjoxNjU0NDIzMjQ2LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.WvF07tq383Zzj8GEHnOZIRspbYDh2dVy9CVUgSrHgUI"
// );
// sessionStorage.setItem(
//   "blueberryrefreshtoken",
//   "jZTIA0khPa4ICb0xm+bDqCsNj01QVJ/A8tw6E2kJTww="
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
