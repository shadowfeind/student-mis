import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Notification from "../../components/Notification";
import DashboardCard from "./DashboardCard";
import { subject } from "./SubjectData";
import { GET_STUDENT_DASHBOARD_RESET } from "./DashboardConstants";
import { useEffect } from "react";
import { getDashboardContentAction } from "./DashboardActions";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    padding: "40px",
    maxWidth: "1600px",
  },
  gridStyle: {
    "&:hover": {
      marginTop: "-10px",
    },
  },
}));

const Dashboard = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dashboardContent, error } = useSelector(
    (state) => state.getDashboardContent
  );

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_STUDENT_DASHBOARD_RESET });
  }

  useEffect(() => {
    if (!dashboardContent) {
      dispatch(getDashboardContentAction());
    }
  }, [dispatch, dashboardContent]);
  return (
    <>
      <div className={classes.dashboardContainer}>
        <Grid container>
          {dashboardContent &&
            dashboardContent.searchFilterModel.ddlSubject.map((s) => (
              <Grid key={s.id} item xs={3} className={classes.gridStyle}>
                <DashboardCard subject={s} />
              </Grid>
            ))}
        </Grid>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default Dashboard;
