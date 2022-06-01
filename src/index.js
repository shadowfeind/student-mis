require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

sessionStorage.setItem(
  "blueberrytoken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNDA1NzUxNy03N2IxLTQwNGUtOWQ5Mi1jZTUzOGY5MDliZTYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUxNDIiLCJJRFVzZXIiOiIxNTE0MiIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJCYWxlbmRyYSAgU2hhaCIsInBpZFJlZkZvckVkaXQiOiJOMjAzIiwiZXhwIjoxNjU0OTM4MTc2LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.jE53aAmJEalubXp5CakJXtankDVKM9FBz83U8WAgD4U"
);
sessionStorage.setItem(
  "blueberryrefreshtoken",
  "LuZgkN5gb1e7Z/smLsWzGj3g8BF1ppntZrizqyfSIUc="
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
