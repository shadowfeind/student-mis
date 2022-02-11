import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  GET_ALL_SYLLABUS_FAIL,
  GET_ALL_SYLLABUS_REQUEST,
  GET_ALL_SYLLABUS_SUCCESS,
} from "./SyllabusConstants";

export const getAllSyllabusAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SYLLABUS_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/SyllabusStudent/GetAllSyllabus`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_SYLLABUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_SYLLABUS_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};
