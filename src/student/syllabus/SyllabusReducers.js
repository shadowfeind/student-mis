import {
  GET_ALL_SYLLABUS_STUDENT_FAIL,
  GET_ALL_SYLLABUS_STUDENT_REQUEST,
  GET_ALL_SYLLABUS_STUDENT_RESET,
  GET_ALL_SYLLABUS_STUDENT_SUCCESS,
  GET_LIST_SYLLABUS_STUDENT_FAIL,
  GET_LIST_SYLLABUS_STUDENT_REQUEST,
  GET_LIST_SYLLABUS_STUDENT_RESET,
  GET_LIST_SYLLABUS_STUDENT_SUCCESS,
  GET_SUBJECT_SYLLABUS_STUDENT_FAIL,
  GET_SUBJECT_SYLLABUS_STUDENT_REQUEST,
  GET_SUBJECT_SYLLABUS_STUDENT_RESET,
  GET_SUBJECT_SYLLABUS_STUDENT_SUCCESS,
} from "./SyllabusConstants";

export const getAllSyllabus = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SYLLABUS_STUDENT_REQUEST:
      return { loading: true };
    case GET_ALL_SYLLABUS_STUDENT_SUCCESS:
      return { loading: false, getAllSyllabus: action.payload };
    case GET_ALL_SYLLABUS_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_SYLLABUS_STUDENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getSubjectSyllabusReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_SUBJECT_SYLLABUS_STUDENT_REQUEST:
        return { loading: true };
      case GET_SUBJECT_SYLLABUS_STUDENT_SUCCESS:
        return { loading: false, subjectSyllabus: action.payload };
      case GET_SUBJECT_SYLLABUS_STUDENT_FAIL:
        return { loading: false, error: action.payload };
      case GET_SUBJECT_SYLLABUS_STUDENT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const getListSyllabusReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_LIST_SYLLABUS_STUDENT_REQUEST:
        return { loading: true };
      case GET_LIST_SYLLABUS_STUDENT_SUCCESS:
        return { loading: false, listSyllabus: action.payload };
      case GET_LIST_SYLLABUS_STUDENT_FAIL:
        return { loading: false, error: action.payload };
      case GET_LIST_SYLLABUS_STUDENT_RESET:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
