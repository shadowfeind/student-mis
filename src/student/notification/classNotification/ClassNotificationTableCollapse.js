import React from "react";
import {
  Button,
  TableRow,
  TableCell,
  makeStyles,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
const useStyles = makeStyles({
    button: {
      marginRight: "1px",
      padding: "5px",
      minWidth: "10px",
      fontSize: "12px",
    },
  });

  const ClassNotificationStudentTableCollapse = ({item})=>{
    const classes = useStyles();
    return (
        <>
      <TableRow>
        <TableCell>{item.FirstName} {item.MiddleName} {item.LastName}</TableCell>
        <TableCell>{item.MessageDescription}</TableCell>
        <TableCell>{item.Created_On?.slice(0,10)}</TableCell>
          </TableRow>
          </>
      )

  }

  export default ClassNotificationStudentTableCollapse;
