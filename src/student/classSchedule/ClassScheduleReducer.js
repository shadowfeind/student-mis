import {
  GET_ALL_CLASS_SCHEDULE_FAIL,
  GET_ALL_CLASS_SCHEDULE_REQUEST,
  GET_ALL_CLASS_SCHEDULE_RESET,
  GET_ALL_CLASS_SCHEDULE_SUCCESS,
} from "./ClassScheduleConstant";

export const getAllClassScheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CLASS_SCHEDULE_REQUEST:
      return { loading: true };
    case GET_ALL_CLASS_SCHEDULE_SUCCESS:
      return { loading: false, classSchedule: action.payload };
    case GET_ALL_CLASS_SCHEDULE_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_CLASS_SCHEDULE_RESET:
      return {};
    default:
      return state;
  }
};
