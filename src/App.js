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
const Dashboard = lazy(() => import("./student/dashboard/Dashboard"));
const Pid = lazy(() => import("./student/pid/Pid"));
const QuickLinks = lazy(() => import("./student/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./student/resources/Resources"));
const Syllabus = lazy(() => import("./student/syllabus/Syllabus"));
const OldQuestions = lazy(() =>
  import("./student/oldQuestions/OldQuestions")
);
const AcademicGrading = lazy(() =>
  import("./student/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() =>
  import("./student/examDivision/ExamDivision")
);
const ExamSchedule = lazy(() =>
  import("./student/examSchedule/ExamSchedule")
);
const ExamMarkEntry = lazy(() =>
  import("./student/examMarkEntry/ExamMarkEntry")
);
const AssignmentFront = lazy(() =>
  import("./student/assignment/AssignmentFront")
);
const Attendance = lazy(() =>
  import("./student/attendance/Attendance")
);
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
    paddingLeft: "15%",
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
            <Route path={"/exam-division"} component={ExamDivision} />
            <Route path={"/exam-schedule"} component={ExamSchedule} />
            <Route path={"/exam-mark-entry"} component={ExamMarkEntry} />
            <Route path={"/pid"} component={Pid} />
            <Route path={"/quick-links"} component={QuickLinks} />
            <Route path={"/resources"} component={Resources} />
            <Route path={"/assignment-front"} component={AssignmentFront} />
            <Route path={"/syllabus"} component={Syllabus} />
            <Route path={"/old-questions"} component={OldQuestions} />
            <Route path={"/attendance"} component={Attendance} />
            <Route
              exact
              path={"/academic-grading"}
              component={AcademicGrading}
            />
            <Route exact path={"/"} component={Dashboard} />
          </Suspense>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};

export default App;
