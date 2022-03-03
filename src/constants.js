// export const API_URL = "http://103.90.86.151:84";
export const API_URL = "http://103.90.86.151:100";
// export const API_URL = "http://192.168.1.85:88";

export const USER_SESSION = sessionStorage.getItem("blueberrytoken");


// export const tokenConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTVhODRmYi02NzVlLTQxM2UtYTY2ZC0zZjg1MzYzZWFmZTciLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTA4MzgiLCJJRFVzZXIiOiIxMDgzOCIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJQcmF0eXVzaCBBbGUgTWFnYXIiLCJwaWRSZWZGb3JFZGl0IjoiNzAwMSIsImV4cCI6MTY0OTE5NzAzMywiaXNzIjoiaHR0cDovL215c2l0ZS5jb20iLCJhdWQiOiJodHRwOi8vbXlzaXRlLmNvbSJ9.GfeWkdFmGvmdxPFXBM-Jiny3BbCiKslfpY_6Spwbj5Y`,
//   },
// };



export const tokenConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${USER_SESSION}`,
  },
};
