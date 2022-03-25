import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";
import { GET_ALL_CLASS_NOTIFICATION_STUDENT_FAIL, GET_ALL_CLASS_NOTIFICATION_STUDENT_REQUEST, GET_ALL_CLASS_NOTIFICATION_STUDENT_SUCCESS, GET_LIST_CLASS_NOTIFICATION_STUDENT_FAIL, GET_LIST_CLASS_NOTIFICATION_STUDENT_REQUEST, GET_LIST_CLASS_NOTIFICATION_STUDENT_SUCCESS } from "./ClassNotificationConstants";

export const getAllClassNotificationStudentAction = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_CLASS_NOTIFICATION_STUDENT_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/ClassInboxNotification/GetAllClassInboxNotification`,
        tokenConfig
      );
  
      dispatch({ type: GET_ALL_CLASS_NOTIFICATION_STUDENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_CLASS_NOTIFICATION_STUDENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
  
  export const getListClassNotificationStudentAction =
    (year, program, classId, shift, section) => async (dispatch) => {
      try {
        dispatch({ type: GET_LIST_CLASS_NOTIFICATION_STUDENT_REQUEST });
  
        const { data } = await axios.get(
          `${API_URL}/api/ClassInboxNotification/GetListClassInboxNotification?idAcademicYear=${year}&idFacultyProgramLink=${program}&idClass=${classId}&idShift=${shift}&classSection=${section}`,
          tokenConfig
        );
  
        dispatch({ type: GET_LIST_CLASS_NOTIFICATION_STUDENT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: GET_LIST_CLASS_NOTIFICATION_STUDENT_FAIL,
          payload: error.message ? error.message : error.Message,
        });
      }
    };