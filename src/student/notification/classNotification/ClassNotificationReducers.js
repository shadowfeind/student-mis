import { GET_ALL_CLASS_NOTIFICATION_STUDENT_FAIL, GET_ALL_CLASS_NOTIFICATION_STUDENT_REQUEST, GET_ALL_CLASS_NOTIFICATION_STUDENT_RESET, GET_ALL_CLASS_NOTIFICATION_STUDENT_SUCCESS, GET_LIST_CLASS_NOTIFICATION_STUDENT_FAIL, GET_LIST_CLASS_NOTIFICATION_STUDENT_REQUEST, GET_LIST_CLASS_NOTIFICATION_STUDENT_RESET, GET_LIST_CLASS_NOTIFICATION_STUDENT_SUCCESS } from "./ClassNotificationConstants";

export const getAllClassNotificationStudentReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ALL_CLASS_NOTIFICATION_STUDENT_REQUEST:
        return { loading: true };
      case GET_ALL_CLASS_NOTIFICATION_STUDENT_SUCCESS:
        return { loading: false, classNotificationStudent: action.payload };
      case GET_ALL_CLASS_NOTIFICATION_STUDENT_FAIL:
        return { loading: false, error: action.payload };
      case GET_ALL_CLASS_NOTIFICATION_STUDENT_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const getListClassNotificationStudentReducer = (state = {}, action) => {
      switch (action.type) {
        case GET_LIST_CLASS_NOTIFICATION_STUDENT_REQUEST:
          return { loading: true };
        case GET_LIST_CLASS_NOTIFICATION_STUDENT_SUCCESS:
          return { loading: false, listClassNotificationStudent: action.payload };
        case GET_LIST_CLASS_NOTIFICATION_STUDENT_FAIL:
          return { loading: false, error: action.payload };
        case GET_LIST_CLASS_NOTIFICATION_STUDENT_RESET:
          return {};
        default:
          return state;
      }
    };
  