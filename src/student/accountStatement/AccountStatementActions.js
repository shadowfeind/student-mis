import { axiosInstance, tokenConfig } from "../../constants";
import {
  GET_ACCOUNT_NAME_FAIL,
  GET_ACCOUNT_NAME_REQUEST,
  GET_ACCOUNT_NAME_SUCCESS,
  GET_ALL_ACCOUNT_STATEMENT_REQUEST,
  GET_ALL_ACCOUNT_STATEMENT_SUCCESS,
  GET_LIST_ACCOUNT_STATEMENT_FAIL,
  GET_LIST_ACCOUNT_STATEMENT_REQUEST,
  GET_LIST_ACCOUNT_STATEMENT_SUCCESS,
} from "./AccountStatementConstants";

export const getAllAccountStatementAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ACCOUNT_STATEMENT_REQUEST });

    const { data } = await axiosInstance.get(
      `/api/StudentLedgerDisplay/GEtAllStudentLedgerDisplay`,
      tokenConfig()
    );

    dispatch({
      type: GET_ALL_ACCOUNT_STATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ACCOUNT_STATEMENT_FAIL,
      payload: error?.response?.data?.Message
        ? error?.response?.data?.Message
        : error?.message,
    });
  }
};

export const getListAccountStatementAction =
  (fiscalYear, start, end) => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_ACCOUNT_STATEMENT_REQUEST });

      const { data } = await axiosInstance.get(
        `/api/StudentLedgerDisplay/GetListStudentLedgerDisplay?idFiscalYear=${fiscalYear}&startDate=${start}&endDate=${end}`,
        tokenConfig()
      );

      dispatch({
        type: GET_LIST_ACCOUNT_STATEMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_ACCOUNT_STATEMENT_FAIL,
        payload: error?.response?.data?.Message
          ? error?.response?.data?.Message
          : error?.message,
      });
    }
  };

export const getAccountNameAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ACCOUNT_NAME_REQUEST });

    const { data } = await axiosInstance.get(
      `/api/StudentLedger/GetAccountNameJsonList`,
      tokenConfig()
    );

    dispatch({ type: GET_ACCOUNT_NAME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ACCOUNT_NAME_FAIL,
      payload: error?.response?.data?.Message
        ? error?.response?.data?.Message
        : error?.message,
    });
  }
};
