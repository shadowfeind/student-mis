require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

sessionStorage.setItem(
  "blueberrytoken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZjBmODA2Yy04YzE3LTQzZTUtOTRhZC0wYTIzN2VkNzAwYTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUxNDQiLCJJRFVzZXIiOiIxNTE0NCIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJOb3NoYW50YSBLdW1hciBTaW5naCIsInBpZFJlZkZvckVkaXQiOiJOTi0xIiwiZXhwIjoxNjU2NjY1MDU3LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.DQ4wnvCgU8F8tBupoIM8ropvFwfpOlXElO7DXpo_A6E"
);
sessionStorage.setItem(
  "blueberryrefreshtoken",
  "w7sk3QMTYzbMnEvfstFD8LjMAK+co4vTwTdbSpsFGQc="
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
