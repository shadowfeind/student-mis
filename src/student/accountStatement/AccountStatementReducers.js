import {
  GET_ACCOUNT_NAME_FAIL,
  GET_ACCOUNT_NAME_REQUEST,
  GET_ACCOUNT_NAME_RESET,
  GET_ACCOUNT_NAME_SUCCESS,
  GET_ALL_ACCOUNT_STATEMENT_FAIL,
  GET_ALL_ACCOUNT_STATEMENT_REQUEST,
  GET_ALL_ACCOUNT_STATEMENT_RESET,
  GET_ALL_ACCOUNT_STATEMENT_SUCCESS,
  GET_LIST_ACCOUNT_STATEMENT_FAIL,
  GET_LIST_ACCOUNT_STATEMENT_REQUEST,
  GET_LIST_ACCOUNT_STATEMENT_RESET,
  GET_LIST_ACCOUNT_STATEMENT_SUCCESS,
} from "./AccountStatementConstants";

export const getAllAccountStatementReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ACCOUNT_STATEMENT_REQUEST:
      return { loading: true };
    case GET_ALL_ACCOUNT_STATEMENT_SUCCESS:
      return { loading: false, accountStatement: action.payload };
    case GET_ALL_ACCOUNT_STATEMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ACCOUNT_STATEMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getListAccountStatementReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST_ACCOUNT_STATEMENT_REQUEST:
      return { loading: true };
    case GET_LIST_ACCOUNT_STATEMENT_SUCCESS:
      return { loading: false, accountStatementList: action.payload };
    case GET_LIST_ACCOUNT_STATEMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_LIST_ACCOUNT_STATEMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getAccountNameReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ACCOUNT_NAME_REQUEST:
      return { loading: true };
    case GET_ACCOUNT_NAME_SUCCESS:
      return { loading: false, accountName: action.payload };
    case GET_ACCOUNT_NAME_FAIL:
      return { loading: false, error: action.payload };
    case GET_ACCOUNT_NAME_RESET:
      return {};
    default:
      return state;
  }
};
