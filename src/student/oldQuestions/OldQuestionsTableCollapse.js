import React, { useState } from "react";
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

const OldQuestionsTableCollapse =({
    item,
}) =>{

    const classes = useStyles();
    return (
        <TableRow>
      <TableCell>{item.OldQuestionName}</TableCell>
      <TableCell>{item.OldQuestionDescription}</TableCell>
      <TableCell>{item.FirstName} {item.LastName}</TableCell>
      <TableCell>{item.Created_On}</TableCell>
      <TableCell>{item.IsActive ? "active" : "notactive"}</TableCell>
      </TableRow>
    );

}
export default OldQuestionsTableCollapse;