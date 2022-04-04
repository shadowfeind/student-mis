import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHeaderContentAction } from "../student/dashboard/DashboardActions";
import { UPLOADPHOTO_RESET } from "../student/pid/uploadPhoto/UploadPhotoConstants";
import { API_URL } from "../constants";
import { getAllUploadPhotoAction } from "../student/pid/uploadPhoto/UploadPhotoActions";
import Notification from "./Notification";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    position: "absolute",
    left: "0",
    height: "100%",
    width: "7%",
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
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const isActive = {
    color: "#253053",
    backgroundColor: "#eaeff5",
    textDecoration: "none",
  };
  const dispatch = useDispatch();
  const { headerContent, error: headerContentError } = useSelector(
    (state) => state.getHeaderContent
  );
  const { success: uploadPhotoSuccess } = useSelector(
    (state) => state.uploadPhoto
  );

  useEffect(() => {
    if (!headerContent) {
      dispatch(getHeaderContentAction());
    }
  }, [headerContent, dispatch]);

  useEffect(() => {
    if (uploadPhotoSuccess) {
      dispatch(getHeaderContentAction());
    }
  }, [uploadPhotoSuccess]);

  return (
    <div className={classes.sideMenu}>
      <Typography
        variant="h5"
        style={{ color: "#fff", textAlign: "center", padding: " 17px 0" }}
      >
        MIS
      </Typography>
      <NavLink to={"/pid"} activeStyle={isActive} className={classes.textBox}>
        {headerContent && (
          <img
            src={`${API_URL}${headerContent.FullPath}`}
            width="70px"
            height="70px"
            style={{ borderRadius: "50%" }}
          />
        )}

        <Typography variant="h6">Profile</Typography>
      </NavLink>
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
      {/* <NavLink
        to={"/exam-schedule"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <PeopleOutline fontSize="medium" />
        <Typography variant="h6">Exam Schedule</Typography>
      </NavLink> */}
      <NavLink
        to={"/class-schedule"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <PeopleOutline fontSize="medium" />
        <Typography variant="h6">Class Routine</Typography>
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
        to={"/notification"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Notification</Typography>
      </NavLink>
      <NavLink
        to={"/announcement"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Announcement</Typography>
      </NavLink>
      <NavLink
        to={"/holiday"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Holiday</Typography>
      </NavLink>
      <NavLink
        to={"/attendance"}
        activeStyle={isActive}
        className={classes.textBox}
      >
        <Accessible fontSize="medium" />
        <Typography variant="h6">Attendance</Typography>
      </NavLink>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default SideMenu;
