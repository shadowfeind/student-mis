import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  School,
  Accessible,
  PeopleOutline,
  ChromeReaderMode,
  Face,
  Assessment,
  Settings,
  PostAdd,
  RecordVoiceOver,
} from "@material-ui/icons";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    position: "absolute",
    left: "0",
    height: "100%",
    width: "6%",
    backgroundColor: "#253053",
    position: "fixed",
    "& h6": {
      fontSize: "13px",
      marginTop: "-8px",
      padding: "0",
    },
    // "& h6:hover": {
    //   backgroundColor: "rgba(255, 255, 255, 0.3)",
    //   textDecoration: "none",
    // },
    "& a:hover": { textDecoration: "none" },
    "& a": { textDecoration: "none" },
  },
  textBox: {
    padding: "10px",
    color: "#fff",
    textAlign: "center",
    display: "block",
    width: "100%",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  const isActive = {
    color: "#253053",
    backgroundColor: "#eaeff5",
    textDecoration: "none",
  };
  return (
    <div className={classes.sideMenu}>
      <Typography
        variant="h5"
        style={{ color: "#fff", textAlign: "center", padding: " 17px 0" }}
      >
        MIS
      </Typography>
      <NavLink
        to={"/"}
        exact={true}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <ChromeReaderMode fontSize="medium" />
        <Typography variant="h6"> DashBoard</Typography>
      </NavLink>
      <NavLink
        to={"/academic-grading"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <School fontSize="medium" />
        <Typography variant="h6">Grading</Typography>
      </NavLink>
      <NavLink
        to={"/exam-division"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Exam Division</Typography>
      </NavLink>
      <NavLink
        to={"/exam-schedule"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <PeopleOutline fontSize="medium" />
        <Typography variant="h6">Exam Schedule</Typography>
      </NavLink>
      <NavLink
        to={"/class-schedule"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <PeopleOutline fontSize="medium" />
        <Typography variant="h6">Class Schedule</Typography>
      </NavLink>

      <NavLink to={"/pid"} activeStyle={isActive} className={classes.textBox}>
        <Settings fontSize="medium" />
        <Typography variant="h6">Pid</Typography>
      </NavLink>
      <NavLink
        to={"/quick-links"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Face fontSize="medium" />
        <Typography variant="h6">Quick Links</Typography>
      </NavLink>
      <NavLink
        to={"/resources"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Assessment fontSize="medium" />
        <Typography variant="h6">Resources</Typography>
      </NavLink>
      <NavLink
        to={"/assignment-front"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <PostAdd fontSize="medium" />
        <Typography variant="h6">Assignment</Typography>
      </NavLink>
      <NavLink
        to={"/syllabus"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <RecordVoiceOver fontSize="medium" />
        <Typography variant="h6">Syllabus</Typography>
      </NavLink>
      <NavLink
        to={"/old-questions"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Old Questions</Typography>
      </NavLink>
      <NavLink
        to={"/attendance"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Attendance</Typography>
      </NavLink>
    </div>
  );
};

export default SideMenu;
