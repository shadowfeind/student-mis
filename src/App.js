import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const PageNotFound = lazy(() => import("./student/pageNotFound/PageNotFound"));
const Dashboard = lazy(() => import("./student/dashboard/Dashboard"));
const Pid = lazy(() => import("./student/pid/UserProfile"));
const QuickLinks = lazy(() => import("./student/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./student/resources/Resources"));
const Syllabus = lazy(() => import("./student/syllabus/Syllabus"));
const OldQuestions = lazy(() => import("./student/oldQuestions/OldQuestions"));
const AcademicGrading = lazy(() =>
  import("./student/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() => import("./student/examDivision/ExamDivision"));
const Notification = lazy(() => import("./student/notification/Notification"));
const Holiday = lazy(() => import("./student/holiday/Holiday"));
const Leave = lazy(() => import("./student/leaveRequest/Leave"));
const Announcement = lazy(() =>
  import("./student/announcementStudent/Announcement")
);
const ClassSchedule = lazy(() =>
  import("./student/classSchedule/ClassSchedule")
);

// const ExamMarkEntry = lazy(() =>
//   import("./student/examMarkEntry/ExamMarkEntry")

const AssignmentFront = lazy(() =>
  import("./student/assignment/AssignmentFront")
);
const Attendance = lazy(() => import("./student/attendance/Attendance"));
const theme = createTheme({
  palette: {
    background: {
      default: "#eaeff5",
    },
  },
  MuiButtonRoot: {
    minWidth: "10px",
    fontSize: "12px",
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "7%",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route path={"/exam-division"} component={ExamDivision} />
              {/* <Route path={"/exam-schedule"} component={ExamSchedule} /> */}
              <Route path={"/pid"} component={Pid} />
              <Route path={"/quick-links"} component={QuickLinks} />
              <Route path={"/resources/:id?"} component={Resources} />
              <Route
                path={"/assignment-front/:id?"}
                component={AssignmentFront}
              />
              <Route path={"/syllabus"} component={Syllabus} />
              <Route path={"/class-schedule"} component={ClassSchedule} />
              <Route path={"/old-questions"} component={OldQuestions} />
              <Route path={"/attendance"} component={Attendance} />
              <Route path={"/leave-request"} component={Leave} />
              <Route path={"/announcement"} component={Announcement} />
              <Route path={"/academic-calendar"} component={Holiday} />
              <Route
                exact
                path={"/academic-grading"}
                component={AcademicGrading}
              />
              <Route exact path={"/notification"} component={Notification} />
              <Route exact path={"/"} component={Dashboard} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};

export default App;
