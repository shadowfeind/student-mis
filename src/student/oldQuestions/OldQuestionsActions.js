import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  GET_ALL_OLD_QUESTIONS_FAIL,
  GET_ALL_OLD_QUESTIONS_REQUEST,
  GET_ALL_OLD_QUESTIONS_SUCCESS,
} from "./OldQuestionsConstants";

export const getAllOldQuestionsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_OLD_QUESTIONS_REQUEST });
    const { data } = await axios.get(
      `${API_URL}/api/OldQuestion/GetAllOldQuestion`,
      tokenConfig
    );

    dispatch({ type: GET_ALL_OLD_QUESTIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_OLD_QUESTIONS_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
