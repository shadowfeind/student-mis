import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  GET_ALL_OLD_QUESTIONS_FAIL,
  GET_ALL_OLD_QUESTIONS_REQUEST,
  GET_ALL_OLD_QUESTIONS_SUCCESS,
  GET_LIST_OLD_QUESTIONS_STUDENT_FAIL,
  GET_LIST_OLD_QUESTIONS_STUDENT_REQUEST,
  GET_LIST_OLD_QUESTIONS_STUDENT_SUCCESS,
  GET_SUBJECT_OPTIONS_OLD_QUESTIONS_FAIL,
  GET_SUBJECT_OPTIONS_OLD_QUESTIONS_REQUEST,
  GET_SUBJECT_OPTIONS_OLD_QUESTIONS_SUCCESS,
} from "./OldQuestionsConstants";

export const getAllOldQuestionsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_OLD_QUESTIONS_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/OldQuestionStudent/GetAllOldQuestion`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_OLD_QUESTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_OLD_QUESTIONS_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getSubjectOptionsForOldQuestionsAction =
  (classId) => async (dispatch) => {
    try {
      dispatch({ type: GET_SUBJECT_OPTIONS_OLD_QUESTIONS_REQUEST });

      const subject = await axios.get(
        `${API_URL}/api/OldQuestionStudent/GetSubjectByIDLevel?level=${classId}`,
        tokenConfig
      );
      const data = {
        subject: subject.data,
      };
      dispatch({
        type: GET_SUBJECT_OPTIONS_OLD_QUESTIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SUBJECT_OPTIONS_OLD_QUESTIONS_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getListOldQuestionsStudentAction =
  (classId, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_OLD_QUESTIONS_STUDENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/OldQuestionStudent/GetListOldQuestion?level=${classId}&idAcademicSubject=${subject}`,
        tokenConfig
      );

      dispatch({
        type: GET_LIST_OLD_QUESTIONS_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_OLD_QUESTIONS_STUDENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
