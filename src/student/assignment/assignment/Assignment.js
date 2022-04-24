import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import LoadingComp from "../../../components/LoadingComp";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import SelectControl from "../../../components/controls/SelectControl";
import {
  DOWNLOAD_ASSIGNMENT_RESET,
  DOWNLOAD_SUBMITTED_ASSIGNMENT_RESET,
  GET_ALL_ASSIGNMENT_RESET,
  GET_ASSIGNMENT_LIST_FAIL,
  GET_ASSIGNMENT_LIST_RESET,
  GET_SINGLE_ASSIGNMENT_RESET,
  PUT_SINGLE_ASSIGNMENT_RESET,
} from "./AssignmentConstant";
import {
  getAllAssignmentAction,
  getAssignmentListAction,
} from "./AssignmentActions";
import AssignmentTableCollapse from "./AssignmentTableCollapse";
import AssignmentEditForm from "./AssignmentEditForm";

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

const test = [{ Key: "", Value: "" }];

const tableHeader = [
  { id: "FullName", label: "Teacher Name" },
  { id: "AssignmentName", label: "Assignment Name" },
  { id: "AssignmentDate", label: "Assignment Date" },
  { id: "DueDate", label: "Due Date" },
  { id: "SubmittedDate", label: "SubmittedDate" },
  { id: "TotalMark", label: "FullMarks" },
  { id: "ObtainedMarks", label: "Obtained Marks" },
  { id: "DocumentName", label: "Assignment" },
  { id: "DocumentSubmitted", label: "Submitted Files" },
  { id: "Actions", label: "Submission", disableSorting: true },
];

const Assignment = () => {
  const { id: subjectIdFromDashboard } = useParams();
  const [ddlClass, setDdlClass] = useState([]);
  const [academicYearDdl, setAcademicYearDdl] = useState([]);
  const [programDdl, setProgramDdl] = useState([]);
  const [ddlShift, setDdlShift] = useState([]);
  const [programValue, setProgramValue] = useState("");
  const [classId, setClassId] = useState("");
  const [acaYear, setAcaYear] = useState("");
  const [shift, setShift] = useState("");
  const [errors, setErrors] = useState({});
  const [ddlFacultySubject, setDdlFacultySubject] = useState([]);
  const [facultySubject, setFacultySubject] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const [tableData, setTableData] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });
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

  const {
    TableContainer,
    TblHead,
    TblPagination,
    tableDataAfterPagingAndSorting,
  } = useCustomTable(tableData, tableHeader, filterFn);

  const handleSearch = (e) => {
    setFilterFn({
      fn: (item) => {
        if (e.target.value === "") {
          return item;
        } else {
          return item.filter((x) =>
            x.AssignmentName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  const { assignment, error: assignmentError } = useSelector(
    (state) => state.getAllAssignment
  );

  const {
    assignmentList,
    loading,
    error: assignmentListError,
  } = useSelector((state) => state.getAssignmentList);

  const {
    singleAssignment,
    loading: loadingEdit,
    error: singleAssignmentError,
  } = useSelector((state) => state.getSingleAssignment);

  const {
    success: putSingleAssignmentSuccess,
    error: putSingleAssignmentError,
  } = useSelector((state) => state.putSingleAssignment);

  const {
    success: downloadAssignmentSuccess,
    file: downloadFile,
    error: downloadAssignmentError,
  } = useSelector((state) => state.downloadAssignment);

  const {
    success: downloadSubmittedAssignmentSuccess,
    file: downloadSubmmitedFile,
    error: downloadSubmittedAssignmentError,
  } = useSelector((state) => state.downloadSubmittedAssignment);

  if (downloadFile) {
    var blob = new Blob([downloadFile]);
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  if (downloadSubmmitedFile) {
    var blob = new Blob([downloadSubmmitedFile]);
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  if (assignmentError) {
    setNotify({
      isOpen: true,
      message: assignmentError,
      type: "error",
    });
    dispatch({ type: GET_ALL_ASSIGNMENT_RESET });
  }
  if (downloadAssignmentError) {
    setNotify({
      isOpen: true,
      message: downloadAssignmentError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_ASSIGNMENT_RESET });
  }

  if (downloadSubmittedAssignmentError) {
    setNotify({
      isOpen: true,
      message: downloadSubmittedAssignmentError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_SUBMITTED_ASSIGNMENT_RESET });
  }

  if (putSingleAssignmentError) {
    setNotify({
      isOpen: true,
      message: putSingleAssignmentError,
      type: "error",
    });
    dispatch({ type: PUT_SINGLE_ASSIGNMENT_RESET });
  }
  if (putSingleAssignmentSuccess) {
    setNotify({
      isOpen: true,
      message: "Successfully Submitted",
      type: "success",
    });
    dispatch({ type: PUT_SINGLE_ASSIGNMENT_RESET });
    setOpenPopup(false);
    dispatch(
      getAssignmentListAction(
        acaYear,
        programValue,
        classId,
        shift,
        facultySubject
      )
    );
  }
  if (singleAssignmentError) {
    setNotify({
      isOpen: true,
      message: singleAssignmentError,
      type: "error",
    });
    dispatch({ type: GET_SINGLE_ASSIGNMENT_RESET });
  }
  if (assignmentListError) {
    setNotify({
      isOpen: true,
      message: assignmentListError,
      type: "error",
    });
    dispatch({ type: GET_ASSIGNMENT_LIST_RESET });
  }

  useEffect(() => {
    if (!assignment) {
      dispatch(getAllAssignmentAction());
    }
    if (assignment) {
      unstable_batchedUpdates(() => {
        setAcademicYearDdl(assignment.searchFilterModel.ddlAcademicYear);
        setProgramDdl(assignment.searchFilterModel.ddlFacultyProgramLink);
        setDdlClass(assignment.searchFilterModel.ddlClass);
        setDdlShift(assignment.searchFilterModel.ddlAcademicShift);
        setDdlFacultySubject(assignment.searchFilterModel.ddlSubject);
        setAcaYear(assignment.searchFilterModel.idAcademicYear);
        setProgramValue(assignment.searchFilterModel.idFacultyProgramLink);
        setClassId(assignment.searchFilterModel.level);
        setShift(assignment.searchFilterModel.idShift);
      });
      if (subjectIdFromDashboard) {
        setFacultySubject(subjectIdFromDashboard);
        dispatch(
          getAssignmentListAction(
            assignment.searchFilterModel.idAcademicYear,
            assignment.searchFilterModel.idFacultyProgramLink,
            assignment.searchFilterModel.level,
            assignment.searchFilterModel.idShift,
            subjectIdFromDashboard
          )
        );
      }
    }
  }, [assignment, dispatch, subjectIdFromDashboard]);

  useEffect(() => {
    if (assignmentList) {
      setTableData(assignmentList.dbstuentSubmissionLst);
    }
  }, [assignmentList]);

  const validate = () => {
    let temp = {};
    temp.acaYear = !acaYear ? "This feild is required" : "";
    temp.programValue = !programValue ? "This feild is required" : "";
    temp.classId = !classId ? "This feild is required" : "";
    temp.shift1 = !shift ? "This feild is required" : "";
    temp.facultySubject = !facultySubject ? "This feild is required" : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleExamScheduleSearch = () => {
    if (validate()) {
      dispatch(
        getAssignmentListAction(
          acaYear,
          programValue,
          classId,
          shift,
          facultySubject
        )
      );
    }
  };

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
                options={academicYearDdl}
                errors={errors.acaYear}
              />
            </Grid>
            {/* <Grid item xs={3}>
              <SelectControl
                name="Program/Faculty"
                label="Program/Faculty"
                value={programValue}
                onChange={(e) => setProgramValue(e.target.value)}
                options={programDdl}
                errors={errors.programValue}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Classes"
                label="Classes"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                options={ddlClass}
                errors={errors.classId}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Shift"
                label="Shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                options={ddlShift}
                errors={errors.shift1}
              />
            </Grid> */}
            <Grid item xs={3}>
              <SelectControl
                name="facultySubject"
                label="Faculty Subject"
                value={facultySubject}
                onChange={(e) => setFacultySubject(e.target.value)}
                options={ddlFacultySubject}
                errors={errors.facultySubject}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px 0 0 10px" }}
                onClick={handleExamScheduleSearch}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <div style={{ height: "15px" }}></div>
        <Toolbar>
          <InputControl
            className={classes.searchInput}
            label="Search Assignment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            {assignmentList && (
              <TableContainer className={classes.table}>
                <TblHead />

                <TableBody>
                  {tableDataAfterPagingAndSorting().map((item) => (
                    <AssignmentTableCollapse
                      item={item}
                      key={item.$id}
                      setOpenPopup={setOpenPopup}
                    />
                  ))}
                </TableBody>
              </TableContainer>
            )}

            {assignmentList && <TblPagination />}
          </>
        )}
      </CustomContainer>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Edit Assignment"
      >
        {loadingEdit ? (
          <LoadingComp />
        ) : (
          <>
            <AssignmentEditForm
              setOpenPopup={setOpenPopup}
              singleAssignment={
                singleAssignment && singleAssignment.dbStudentSubmissionModel
              }
            />
          </>
        )}
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Assignment;
