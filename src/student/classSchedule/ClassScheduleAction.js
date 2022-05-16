
import { API_URL,axiosInstance,tokenConfig } from "../../constants";
import { GET_ALL_CLASS_SCHEDULE_FAIL, GET_ALL_CLASS_SCHEDULE_REQUEST, GET_ALL_CLASS_SCHEDULE_SUCCESS } from "./ClassScheduleConstant";


export const getAllClassScheduleAction = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_CLASS_SCHEDULE_REQUEST });
      const { data } = await axiosInstance.get(
        `${API_URL}/api/ClassScheduleStudent/GetRunningClassSchedule`,tokenConfig()
      );
  
      dispatch({ type: GET_ALL_CLASS_SCHEDULE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_CLASS_SCHEDULE_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  