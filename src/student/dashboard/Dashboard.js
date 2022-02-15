import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";
import DashboardCard from "./DashboardCard";
import { subject } from "./SubjectData";

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
  const classes = useStyles();
  return (
    <>
      <div className={classes.dashboardContainer}>
        <Grid container>
          {subject.map((s) => (
            <Grid key={s.id} item xs={3} className={classes.gridStyle}>
              <DashboardCard subject={s} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
