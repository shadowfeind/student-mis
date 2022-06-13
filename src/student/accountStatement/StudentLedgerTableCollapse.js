import React from "react";
import { Button, TableRow, TableCell, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  button: {
    marginRight: "1px",
    padding: "5px",
    minWidth: "10px",
    fontSize: "12px",
  },
});

const StudentLedgerTableCollapse = ({ item, accountName }) => {
  const classes = useStyles();
  const accountNameShow = accountName?.filter(
    (s) => s.val === item.IDAccountType
  );

  return (
    <>
      <TableRow key={item.$id}>
        <TableCell>{item.IDTransactionDrCr}</TableCell>
        <TableCell>{item.VoucherBillNo}</TableCell>
        {/* <TableCell>
          {classNameToShow?.length > 0 && classNameToShow[0]?.Value}
        </TableCell> */}
        <TableCell width="50%">{item.AccountType}</TableCell>
        {/* <TableCell>
          {monthNameToShow?.length > 0 && monthNameToShow[0]?.Value}
        </TableCell> */}
        <TableCell>
          {accountNameShow?.length > 0 && accountNameShow[0]?.label}
        </TableCell>

        <TableCell width="30%">{item.TransactionDate?.slice(0, 10)}</TableCell>
        <TableCell>{item.TransactionDate?.slice(0, 10)}</TableCell>
        <TableCell>{item.Narration}</TableCell>
        <TableCell>{item.Dr}</TableCell>
        <TableCell>{item.Cr}</TableCell>
        <TableCell>{item.Balance}</TableCell>
      </TableRow>
    </>
  );
};

export default StudentLedgerTableCollapse;
