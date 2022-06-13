import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CustomContainer from "../../components/CustomContainer";
import Notification from "../../components/Notification";
import {
  getAccountNameAction,
  getAllAccountStatementAction,
  getListAccountStatementAction,
} from "./AccountStatementActions";
import {
  GET_ALL_ACCOUNT_STATEMENT_RESET,
  GET_LIST_ACCOUNT_STATEMENT_RESET,
} from "./AccountStatementConstants";
import StudentLedgerTableCollapse from "./StudentLedgerTableCollapse";
import useCustomTable from "../../customHooks/useCustomTable";

const tableHeader = [
  { id: "idDrCr", label: "idDrCr" },
  { id: "Voucher/BillNo", label: "Voucher/BillNo" },
  { id: "AccountForm", label: "Account Form" },
  // { id: "BillMonth", label: "Month" },
  { id: "AccountName", label: "Account Name" },
  { id: "TransactionDate", label: "Transaction Date" },
  { id: "TransactionType", label: "Transaction Type" },
  { id: "Narration", label: "Narration" },
  { id: "Dr(Rs)", label: "Dr(Rs)" },
  { id: "Cr(Rs)", label: "Cr(Rs)" },
  { id: "Balance", label: "Balance" },
];

const AccountStatement = () => {
  const [fiscalYear, setFiscalYear] = useState("");
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const {
    TableContainer,
    TblHead,
    TblPagination,
    tableDataAfterPagingAndSorting,
  } = useCustomTable(tableData, tableHeader, filterFn);

  const dispatch = useDispatch();

  const { accountStatement, error: accountStatementError } = useSelector(
    (state) => state.getAllAccountStatement
  );
  const { accountStatementList, error: accountStatementListError } =
    useSelector((state) => state.getListAccountStatement);

  const { accountName } = useSelector((state) => state.getAccountName);

  if (accountStatementError) {
    setNotify({
      isOpen: true,
      message: accountStatementError,
      type: "error",
    });
    dispatch({ type: GET_ALL_ACCOUNT_STATEMENT_RESET });
  }
  if (accountStatementListError) {
    setNotify({
      isOpen: true,
      message: accountStatementListError,
      type: "error",
    });
    dispatch({ type: GET_LIST_ACCOUNT_STATEMENT_RESET });
  }
  useEffect(() => {
    dispatch(getAllAccountStatementAction());
    dispatch(getAccountNameAction());
    dispatch({ type: GET_LIST_ACCOUNT_STATEMENT_RESET });
  }, []);

  useEffect(() => {
    if (accountStatement) {
      setFiscalYear(accountStatement?.IDFiscalYear);
      setStartDate(
        accountStatement?.searchFilterModel?.studentLedgerModel?.StartDate?.slice(
          0,
          10
        )
      );
      setEndDate(
        accountStatement?.searchFilterModel?.studentLedgerModel?.EndDate?.slice(
          0,
          10
        )
      );
    }
  }, [accountStatement]);

  const handleListSearch = () => {
    dispatch(getListAccountStatementAction(fiscalYear, startDate, endDate));
  };
  return (
    <>
      <CustomContainer>
        <Toolbar>
          <Grid container style={{ fontSize: "12px" }}>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="dd-MM-yyyy"
                  name="StartDate"
                  label="Start Date"
                  value={startDate}
                  onChange={(e) => {
                    const newDate = new Date(e);
                    setStartDate(newDate.toLocaleDateString().slice(0, 10));
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="dd-MM-yyyy"
                  name="EndDate"
                  label="End Date"
                  value={endDate}
                  onChange={(e) => {
                    const newDate = new Date(e);
                    setEndDate(newDate.toLocaleDateString().slice(0, 10));
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px 0 0 10px" }}
                onClick={handleListSearch}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        {accountStatementList && (
          <TableContainer>
            <TblHead />
            <TableBody>
              {accountStatementList?.studentLedgerModelLstsForStudent?.map(
                (item) => (
                  <StudentLedgerTableCollapse
                    item={item}
                    key={item.$id}
                    accountName={accountName}
                  />
                )
              )}
            </TableBody>
          </TableContainer>
        )}
      </CustomContainer>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default AccountStatement;
