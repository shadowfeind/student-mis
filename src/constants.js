// export const API_URL = "http://103.90.86.151:84";
// export const API_URL = "http://103.90.86.151:100";
// export const API_URL = "http://192.168.1.85:88";
export const API_URL = "https://mis.vidyacube.com";
import jwt_decode from "jwt-decode";
import moment from "moment";
import axios from "axios";

export const USER_SESSION = sessionStorage.getItem("blueberrytoken");

// export const tokenConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjk4YjRkOS1iOTIzLTRmNzAtOGY3ZC1hOTQ4YjFjOGJjYjYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUwNjciLCJJRFVzZXIiOiIxNTA2NyIsIklEUm9sZSI6IjgiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJsNCAgbDQiLCJwaWRSZWZGb3JFZGl0IjoiTDQiLCJleHAiOjE2NTIzMzE2MTMsImlzcyI6Imh0dHA6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cDovL215c2l0ZS5jb20ifQ.0pgS4b2VrBDYFhLlul2CNEIsXej03RUUUthG5GcCTZ8`,
//   },
// };

//for fcm token
export const tokenHeader = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `key=AAAACB9i9IE:APA91bEuqomtN9gss5UOVzngtIofWkWo9tUWAZ_2LYBNeKbuZXXns-S6NuBWEgYCnQj8gsI6YbvlbxKIByeYvHjgf2U-GjTTPCB44_K6yjcPhvDHqQD5WaUCshNEDzAuz3r91MeBJe3D`,
  },
};

export const tokenConfig = () => {
  const user = sessionStorage.getItem("blueberrytoken")
    ? sessionStorage.getItem("blueberrytoken")
    : null;

  if (user) {
    // const userSessionCheck = jwt_decode(user.AccessToken);
    // const isExpired = userSessionCheck.exp - moment().unix() < 1;
    // console.log(userSessionCheck.exp);
    // console.log(moment.unix(userSessionCheck.exp));
    // console.log(moment().unix());
    // console.log(isExpired);
    // if (isExpired) {
    //   localStorage.removeItem("blueberryToken");
    //   document.location.href = "/#/login/5";
    //   return;
    // }

    const tokenReturn = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    };

    return tokenReturn;
  } else {
    return {};
  }
};

export const axiosInstance = axios.create({
  baseURL: API_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${userSession}`,
  // },
});

axiosInstance.interceptors.request.use(async (req) => {
  const userSession = sessionStorage.getItem("blueberrytoken");
  const userRefreshToken = sessionStorage.getItem("blueberryrefreshtoken");
  const user = jwt_decode(userSession);
  const isExpired = user.exp - moment().unix() < 1;
  console.log(user.exp);
  console.log(moment.unix(user.exp));
  console.log(moment().unix());
  console.log("isExpired", isExpired);

  if (!isExpired) return req;

  const dataForRefreshToken = {
    AccessToken: userSession,
    RefreshToken: userRefreshToken,
  };

  const JSONdata = JSON.stringify(dataForRefreshToken);
  const config = { headers: { "Content-Type": "application/json" } };

  console.log(JSONdata);

  try {
    const { data } = await axios.post(
      `${API_URL}/api/RefreshTokenGenerator/RefreshToken`,
      JSONdata,
      config
    );
    console.log(data);

    sessionStorage.setItem("blueberrytoken", data.AccessToken);
    sessionStorage.setItem("blueberryrefreshtoken", data.RefreshToken);
    req.headers.Authorization = `Bearer ${data.AccessToken}`;
  } catch (error) {
    console.log(
      error.response.data.Message ? error.response.data.Message : error.message
    );
  }

  return req;
});
