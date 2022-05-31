import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import useCustomTable from "../../customHooks/useCustomTable";
import InputControl from "../../components/controls/InputControl";
import { Search } from "@material-ui/icons";
import LoadingComp from "../../components/LoadingComp";
import Popup from "../../components/Popup";
import CustomContainer from "../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";
import SelectControl from "../../components/controls/SelectControl";
import {
  DOWNLOAD_OLD_QUESTIONS_RESET,
  GET_ALL_OLD_QUESTIONS_RESET,
  GET_LIST_OLD_QUESTIONS_STUDENT_RESET,
  GET_SUBJECT_OPTIONS_OLD_QUESTIONS_RESET,
} from "./OldQuestionsConstants";
import {
  getAllOldQuestionsAction,
  getListOldQuestionsStudentAction,
  getSubjectOptionsForOldQuestionsAction,
} from "./OldQuestionsActions";
import OldQuestionsTableCollapse from "./OldQuestionsTableCollapse";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "75%",
    fontSize: "12px",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
}));

const tableHeader = [
  { id: "Name", label: "Name" },
  { id: "Description", label: "Description" },
  { id: "PostedBy", label: "Posted By" },
  { id: "PostedDate", label: "Posted Date" },
  { id: "IsActive", label: "IsActive" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const OldQuestions = () => {
  const [ddlClass, setDdlClass] = useState([]);
  const [classId, setClassId] = useState("");
  const [ddlFacultySubject, setDdlFacultySubject] = useState([]);
  const [facultySubject, setFacultySubject] = useState("");
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });

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
  const classes = useStyles();
  const dispatch = useDispatch();

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
            x.OldQuestionName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  const { oldQuestions, oldQuestionsError } = useSelector(
    (state) => state.getAllOldQuestions
  );
  const { subjectOptions, error: subjectOptionsError } = useSelector(
    (state) => state.getSubjectOptionsForOldQuestions
  );

  const { listOldQuestionsStudent, loading } = useSelector(
    (state) => state.getListOldQuestionsStudent
  );

  const {
    success: downloadOldQuestionsSuccess,
    file: downloadFile,
    error: downloadOldQuestionsError,
  } = useSelector((state) => state.downloadOldQuestions);

  if (downloadFile) {
    var blob = new Blob([downloadFile]);
    var url = window.URL.createObjectURL(blob);
    debugger;
    window.open(url, "_blank");
  }
  if (oldQuestionsError) {
    setNotify({
      isOpen: true,
      message: oldQuestionsError,
      type: "error",
    });
    dispatch({ type: GET_ALL_OLD_QUESTIONS_RESET });
  }

  if (downloadOldQuestionsError) {
    setNotify({
      isOpen: true,
      message: downloadOldQuestionsError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_OLD_QUESTIONS_RESET });
  }
  if (subjectOptionsError) {
    setNotify({
      isOpen: true,
      message: subjectOptionsError,
      type: "error",
    });
    dispatch({ type: GET_SUBJECT_OPTIONS_OLD_QUESTIONS_RESET });
  }

  const validate = () => {
    let temp = {};
    temp.classId = !classId ? "This feild is required" : "";
    temp.facultySubject = !facultySubject ? "This feild is required" : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  useEffect(() => {
    if (oldQuestions) {
      setDdlClass(oldQuestions.searchFilterModel.ddlClass);
    }
  }, [dispatch, oldQuestions]);

  useEffect(() => {
    if (listOldQuestionsStudent) {
      setTableData(listOldQuestionsStudent.dbModelStudentLst);
    }
  }, [listOldQuestionsStudent]);

  useEffect(() => {
    if (subjectOptions) {
      setDdlFacultySubject([...subjectOptions.subject]);
    }
  }, [subjectOptions]);

  const listSearchHandler = () => {
    if (validate()) {
      dispatch(getListOldQuestionsStudentAction(classId, facultySubject));
    }
  };

  useEffect(() => {
    dispatch({ type: GET_LIST_OLD_QUESTIONS_STUDENT_RESET });
    dispatch(getAllOldQuestionsAction());
  }, []);

  const handleClassIdChange = (value) => {
    setClassId(value);
    dispatch(getSubjectOptionsForOldQuestionsAction(value));
  };
  return (
    <>
      <CustomContainer>
        <Toolbar>
          <Grid container style={{ fontSize: "12px" }}>
            <Grid item xs={3}>
              <SelectControl
                name="classes"
                label="Class"
                onChange={(e) => handleClassIdChange(e.target.value)}
                options={ddlClass}
                value={classId}
                errors={errors.classId}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="subject"
                label="Subject"
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
                onClick={listSearchHandler}
                type="submit"
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
            label="Search Old Questions"
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
            {listOldQuestionsStudent && (
              <TableContainer className={classes.table}>
                <TblHead />

                <TableBody>
                  {tableDataAfterPagingAndSorting().map((item) => (
                    <OldQuestionsTableCollapse item={item} key={item.$id} />
                  ))}
                </TableBody>
              </TableContainer>
            )}
            {listOldQuestionsStudent && <TblPagination />}
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

export default OldQuestions;
