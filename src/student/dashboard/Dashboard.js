import { Grid, makeStyles, Card } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { School, PeopleOutline, Face, Settings } from "@material-ui/icons";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment, { months } from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DashboardCard from "./DashboardCard";
import { subject } from "./SubjectData";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    padding: "40px",
    maxWidth: "1600px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const localizer = momentLocalizer(moment);

  return (
    <>
      <div className={classes.dashboardContainer}>
        <Grid container>
          {subject.map((s) => (
            <Grid key={s.id} item xs={3}>
              <DashboardCard subject={s} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
