require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

sessionStorage.setItem(
  "blueberrytoken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYzJkYjg4Ny0zMGIxLTQzODEtOGZhNS1mNjEyZWZmODMxNDMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUxNDIiLCJJRFVzZXIiOiIxNTE0MiIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJCYWxlbmRyYSAgU2hhaCIsInBpZFJlZkZvckVkaXQiOiJOMjAzIiwiZXhwIjoxNjU1NjM1NDUzLCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.klHpxB9CROgOPEXMZfWRZML17G2EFytdwR2wR9puiyE"
);
sessionStorage.setItem(
  "blueberryrefreshtoken",
  "6opQ476FCNRVK6F0/a+uV4pX46vGPjznvNQkIFI3uks="
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
