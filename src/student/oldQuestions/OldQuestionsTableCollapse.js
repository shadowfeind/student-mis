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
        <TableRow key={item.$id}>
            <TableCell>{item.Name}</TableCell>
            <TableCell>{item.Description}</TableCell>
            <TableCell>{item.PostedBy}</TableCell>
            <TableCell>{item.PostedDate}</TableCell>
            <TableCell>{item.IsActive}</TableCell>
        </TableRow>
    );

}
export default OldQuestionsTableCollapse;