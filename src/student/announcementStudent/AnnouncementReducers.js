import {
  GET_ALL_ANNOUNCEMENT_STUDENT_FAIL,
  GET_ALL_ANNOUNCEMENT_STUDENT_REQUEST,
  GET_ALL_ANNOUNCEMENT_STUDENT_RESET,
  GET_ALL_ANNOUNCEMENT_STUDENT_SUCCESS,
} from "./AnnouncementConstant";

export const getAllStudentAnnouncement = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ANNOUNCEMENT_STUDENT_REQUEST:
      return { loading: true };
    case GET_ALL_ANNOUNCEMENT_STUDENT_SUCCESS:
      return { loading: false, announcement: action.payload };
    case GET_ALL_ANNOUNCEMENT_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ANNOUNCEMENT_STUDENT_RESET:
      return {};
    default:
      return state;
  }
};
