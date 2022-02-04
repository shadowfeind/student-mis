import {
  DOWNLOAD_ASSIGNMENT_FAIL,
  DOWNLOAD_ASSIGNMENT_REQUEST,
  DOWNLOAD_ASSIGNMENT_RESET,
  DOWNLOAD_ASSIGNMENT_SUCCESS,
  GET_ALL_ASSIGNMENT_FAIL,
  GET_ALL_ASSIGNMENT_REQUEST,
  GET_ALL_ASSIGNMENT_RESET,
  GET_ALL_ASSIGNMENT_SUCCESS,
  GET_ASSIGNMENT_LIST_FAIL,
  GET_ASSIGNMENT_LIST_REQUEST,
  GET_ASSIGNMENT_LIST_RESET,
  GET_ASSIGNMENT_LIST_SUCCESS,
  GET_SINGLE_ASSIGNMENT_FAIL,
  GET_SINGLE_ASSIGNMENT_REQUEST,
  GET_SINGLE_ASSIGNMENT_RESET,
  GET_SINGLE_ASSIGNMENT_SUCCESS,
  PUT_SINGLE_ASSIGNMENT_FAIL,
  PUT_SINGLE_ASSIGNMENT_REQUEST,
  PUT_SINGLE_ASSIGNMENT_RESET,
  PUT_SINGLE_ASSIGNMENT_SUCCESS,
} from "./AssignmentConstant";

export const getAllAssignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ASSIGNMENT_REQUEST:
      return { loading: true };
    case GET_ALL_ASSIGNMENT_SUCCESS:
      return { loading: false, assignment: action.payload };
    case GET_ALL_ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ASSIGNMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getAssignmentListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_LIST_REQUEST:
      return { loading: true };
    case GET_ASSIGNMENT_LIST_SUCCESS:
      return { loading: false, assignmentList: action.payload };
    case GET_ASSIGNMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case GET_ASSIGNMENT_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const getSingleAssignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_ASSIGNMENT_REQUEST:
      return { loading: true };
    case GET_SINGLE_ASSIGNMENT_SUCCESS:
      return { loading: false, singleAssignment: action.payload };
    case GET_SINGLE_ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_SINGLE_ASSIGNMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const putSingleAssignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_SINGLE_ASSIGNMENT_REQUEST:
      return { loading: true };
    case PUT_SINGLE_ASSIGNMENT_SUCCESS:
      return { loading: false, success: true };
    case PUT_SINGLE_ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload };
    case PUT_SINGLE_ASSIGNMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const downloadAssignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case DOWNLOAD_ASSIGNMENT_REQUEST:
      return { loading: true };
    case DOWNLOAD_ASSIGNMENT_SUCCESS:
      return { loading: false, success: true, file: action.payload };
    case DOWNLOAD_ASSIGNMENT_FAIL:
      return { loading: false, error: action.payload };
    case DOWNLOAD_ASSIGNMENT_RESET:
      return {};
    default:
      return state;
  }
};
