import React, { useEffect, useState } from "react";
import { Button, makeStyles, Toolbar, Grid } from "@material-ui/core";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import LoadingComp from "../../../components/LoadingComp";
import ConfirmDialog from "../../../components/ConfirmDialog";
import SelectControl from "../../../components/controls/SelectControl";
import {
  GET_ALL_OTHER_OPTIONS_FOR_STUDENT_RESET,
  GET_ALL_STUDENT_ATTENDANCE_RESET,
  GET_LIST_STUDENT_ATTENDANCE_RESET,
} from "./StudentMonthlyPresentSheetConstants";
import {
  getAllStudentAttendanceAction,
  getEngDateStudentAction,
  getListStudentAttendanceAction,
} from "./StudentMonthlyPresentSheetActions";
import DatePickerControl from "../../../components/controls/DatePickerControl";
import StudentMonthlyPresentSheetTableCollapse from "./StudentMonthlyPresentSheetTableCollapse";
import StudentMonthlyPresentSheetUpdateForm from "./StudentMonthlyPresentSheetUpdateForm";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "75%",
    fontSize: "12px",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
  customInput: {
    minWidth: "200px",
  },
}));

const StudentMonthlyPresentSheet = () => {
  const [ddlClass, setDdlClass] = useState([]);
  const [academicYearDdl, setAcademicYearDdl] = useState([]);
  const [programDdl, setProgramDdl] = useState([]);
  const [ddlShift, setDdlShift] = useState([]);
  const [ddlSection, setDdlSection] = useState([]);
  const [ddlSubjectAttendance, setDdlSubject] = useState([]);
  const [ddlNepMonth, setDdlNepMonth] = useState([]);
  const [ddlNepYear, setDdlNepYear] = useState([]);

  const [programValue, setProgramValue] = useState("");
  const [classId, setClassId] = useState("");
  const [acaYear, setAcaYear] = useState("");
  const [shift, setShift] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [nepMonth, setNepMonth] = useState("");
  const [nepYear, setNepYear] = useState("");
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState();

  const dispatch = useDispatch();
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const test = [{ Key: "", Value: "" }];

  const {
    allStudentAttendanceData,
    error: allStudentAttendanceDataError,
  } = useSelector((state) => state.getAllStudentAttendance);

  const { allOtherOptions, error: allOtherOptionsError } = useSelector(
    (state) => state.getAllOtherOptionsForStudent
  );

  const { engDateStudent, error: engDateStudentError } = useSelector(
    (state) => state.getEnglishDateStudent
  );


  const { getListStudentAttendance,loading, error: getListStudentAttendanceError } =
    useSelector((state) => state.getListStudentAttendance);


  if (allStudentAttendanceDataError) {
    setNotify({
      isOpen: true,
      message: allStudentAttendanceDataError,
      type: "error",
    });
    dispatch({ type: GET_ALL_STUDENT_ATTENDANCE_RESET });
  }
  
  if (allOtherOptionsError) {
    setNotify({
      isOpen: true,
      message: allOtherOptionsError,
      type: "error",
    });
    dispatch({ type: GET_ALL_OTHER_OPTIONS_FOR_STUDENT_RESET });
  }

  if (getListStudentAttendanceError) {
    setNotify({
      isOpen: true,
      message: getListStudentAttendanceError,
      type: "error",
    });
    dispatch({ type: GET_LIST_STUDENT_ATTENDANCE_RESET });
  }

  useEffect(() => {
    if (!allStudentAttendanceData) {
      dispatch(getAllStudentAttendanceAction());
    }
    if (allStudentAttendanceData) {
      setProgramDdl(
        allStudentAttendanceData.searchFilterModel
          .ddlFacultyProgramLink
      );
      setDdlClass(allStudentAttendanceData.searchFilterModel.ddlClass);
      setAcademicYearDdl(
        allStudentAttendanceData.searchFilterModel.ddlAcademicYear
      );
      setDdlShift(
        allStudentAttendanceData.searchFilterModel.ddlAcademicShift
      );
      setDdlSubject(
        allStudentAttendanceData.searchFilterModel.ddlSubjectAttendance
      );
      setDdlSection(
        allStudentAttendanceData.searchFilterModel.ddlSection
      );
      setDdlNepMonth(
        allStudentAttendanceData.searchFilterModel.ddlnpMonth
      );
      setDdlNepYear(
        allStudentAttendanceData.searchFilterModel.ddlnpYear
      );
      setDate(
        allStudentAttendanceData.searchFilterModel.currentDate.slice(
          0,
          10
        )
      );
      setNepMonth(allStudentAttendanceData.searchFilterModel.npMonth);
      setNepYear(allStudentAttendanceData.searchFilterModel.npYear);
      setProgramValue(allStudentAttendanceData.searchFilterModel.idFacultyProgramLink);
      setAcaYear(allStudentAttendanceData.searchFilterModel.idAcademicYear);
      setClassId(allStudentAttendanceData.searchFilterModel.level);
      setShift(allStudentAttendanceData.searchFilterModel.idShift);
      setSection(allStudentAttendanceData.searchFilterModel.section);
      setSubject(allStudentAttendanceData.searchFilterModel.idSubject);
    }
  }, [allStudentAttendanceData, dispatch]);

  // useEffect(() => {
  //   if (subjectOptions) {
  //     setDdlSubject(subjectOptions);
  //   }
  // }, [subjectOptions]);

  const validate = () => {
    let temp = {};
    temp.acaYear = !acaYear ? "This feild is required" : "";
    temp.programValue = !programValue ? "This feild is required" : "";
    temp.classId = !classId ? "This feild is required" : "";
    temp.shift = !shift ? "This feild is required" : "";
    temp.section = !section ? "This feild is required" : "";
    temp.subject = !subject ? "This feild is required" : "";
    temp.nepMonth = !nepMonth ? "This feild is required" : "";
    temp.nepYear = !nepYear ? "This feild is required" : "";
    temp.date = !date ? "This feild is required" : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSearchAttendance = () => {
    if (validate()) {
      dispatch(
        getListStudentAttendanceAction(
          date,
          nepYear,
          nepMonth,
          acaYear,
          programValue,
          classId,
          subject,
          section,
          shift,
          
        )
      );
    }
  };

  // const handleYearChange = (value) => {
  //   setAcaYear(value);
  //   if ((programValue, classId)) {
  //     dispatch(getSubjectOptionsForSelectAction(value, programValue, classId));
  //   }
  // };

  // const handleProgramChange = (value) => {
  //   setProgramValue(value);
  //   if ((acaYear, classId)) {
  //     dispatch(getSubjectOptionsForSelectAction(acaYear, value, classId));
  //   }
  // };

  // const handleClassIdChange = (value) => {
  //   setClassId(value);
  //   if ((acaYear, programValue)) {
  //     dispatch(getSubjectOptionsForSelectAction(acaYear, programValue, value));
  //   }
  // };

  const nepMonthHandler = (value) => {
    setNepMonth(value);
    if (nepYear) {
      dispatch(getEngDateStudentAction(value, nepYear));
    }
  };
  const nepYearHandler = (value) => {
    setNepYear(value);
    if (nepMonth) {
      dispatch(getEngDateStudentAction(nepMonth, value));
    }
  };

  useEffect(() => {
    if (allOtherOptions) {
      setAcaYear(
        allOtherOptions.year.length > 0 ? allOtherOptions.year[0].Key : ""
      );
      setProgramValue(
        allOtherOptions.program.length > 0 ? allOtherOptions.program[0].Key : ""
      );
      setClassId(
        allOtherOptions.classId.length > 0 ? allOtherOptions.classId[0].Key : ""
      );
      setSection(
        allOtherOptions.section.length > 0 ? allOtherOptions.section[0].Key : ""
      );
      setShift(
        allOtherOptions.shift.length > 0 ? allOtherOptions.shift[0].Key : ""
      );
    }
  }, [allOtherOptions]);

  return (
    <>
      <CustomContainer>
        <Toolbar>
          <Grid container style={{ fontSize: "12px" }}>
            <Grid item xs={3}>
              <SelectControl
                name="Academic Year"
                label="Academic Year"
                value={acaYear}
                onChange={(e) => setAcaYear(e.target.value)}
                options={academicYearDdl ? academicYearDdl : test}
                errors={errors.acaYear}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Program/Faculty"
                label="Program/Faculty"
                value={programValue}
                onChange={(e) => setProgramValue(e.target.value)}
                options={programDdl ? programDdl : test}
                errors={errors.programValue}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Classes"
                label="Classes"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                options={ddlClass ? ddlClass : test}
                errors={errors.classId}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Shift"
                label="Shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                options={ddlShift ? ddlShift : test}
                errors={errors.shift}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="Section"
                label="Section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                options={ddlSection ? ddlSection : test}
                errors={errors.section}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="Subject"
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                options={ddlSubjectAttendance ? ddlSubjectAttendance : test}
                errors={errors.subject}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="NepaliMonth"
                label="Nepali Month"
                value={nepMonth}
                onChange={(e) => nepMonthHandler(e.target.value)}
                options={ddlNepMonth ? ddlNepMonth : test}
                errors={errors.nepMonth}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="NepaliYear"
                label="Nepali Year"
                value={nepYear}
                onChange={(e) => nepYearHandler(e.target.value)}
                options={ddlNepYear ? ddlNepYear : test}
                errors={errors.nepYear}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>

             <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="dd-MM-yyyy"
                  name="CurrentYear"
                  label="Current Year"
                  value={date}
                  onChange={(e) => {
                    const newDate = new Date(e);
                    setDate(newDate.toLocaleDateString().slice(0, 10));
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px 0 0 10px" }}
                onClick={handleSearchAttendance}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        {loading ? (
            <LoadingComp />):(
              <>
        {getListStudentAttendance && (
          <StudentMonthlyPresentSheetTableCollapse
            students={getListStudentAttendance && getListStudentAttendance}
          />
        )}
        </>
            )}
      </CustomContainer>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default StudentMonthlyPresentSheet;
