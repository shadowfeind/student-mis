import {
  GET_ALL_OLD_QUESTIONS_FAIL,
  GET_ALL_OLD_QUESTIONS_REQUEST,
  GET_ALL_OLD_QUESTIONS_RESET,
  GET_ALL_OLD_QUESTIONS_SUCCESS,
} from "./OldQuestionsConstants";

export const getAllOldQuestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_OLD_QUESTIONS_REQUEST:
      return { loading: true };
    case GET_ALL_OLD_QUESTIONS_SUCCESS:
      return { loading: false, oldQuestions: action.payload };
    case GET_ALL_OLD_QUESTIONS_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_OLD_QUESTIONS_RESET:
      return {};
    default:
      return state;
  }
};
