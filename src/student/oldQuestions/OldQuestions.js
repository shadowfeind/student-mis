import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
} from "@material-ui/core";
import useCustomTable from "../../customHooks/useCustomTable";
import InputControl from "../../components/controls/InputControl";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import CustomContainer from "../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";
import SelectControl from "../../components/controls/SelectControl";
import { GET_ALL_OLD_QUESTIONS_RESET } from "./OldQuestionsConstants";
import { getAllOldQuestionsAction } from "./OldQuestionsActions";
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
];

const OldQuestions = () => {
  const [ddlClass, setDdlClass] = useState([]);
  const [classId, setClassId] = useState("");
  const [ddlFacultySubject, setDdlFacultySubject] = useState([]);
    const [facultySubject, setFacultySubject] = useState("");
    const [errors, setErrors] = useState({});

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

  const classes = useStyles();

  const dispatch = useDispatch();

  const { oldQuestions, oldQuestionsError } = useSelector(
    (state) => state.getAllOldQuestions
  );

  if (oldQuestionsError) {
    setNotify({
      isOpen: true,
      message: oldQuestionsError,
      type: "error",
    });
    dispatch({ type: GET_ALL_OLD_QUESTIONS_RESET });
  }

const validate=()=>{
    let temp ={};
    temp.classId = !classId ? "This feild is required" : "";
    temp.facultySubject = !facultySubject ? "This feild is required" : "";
    
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  }
  
  useEffect(() => {
    if (!oldQuestions) {
      dispatch(getAllOldQuestionsAction());
    }
    if (oldQuestions) {
      setDdlClass(oldQuestions.searchFilterModel.ddlClass);
      setDdlFacultySubject(
        oldQuestions.searchFilterModel.ddlSubject
      );
    }
  }, [dispatch, oldQuestions]);

  const handleExamScheduleSearch = () => {
    // if (validate()) {
    //   dispatch(
    //     getNewResourcesStudentListAction(facultySubject, acaYear, programValue, classId, section, shift)
    //   );
    // }
  };

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
          x.Division.toLowerCase().includes(e.target.value)
        );
      }
    },
  });
};

return  (
  <>
    <CustomContainer>
            <Toolbar>
              <Grid container style={{ fontSize: "12px" }}>
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
                name="facultySubject"
                label="Faculty Subject"
                value={facultySubject}
                onChange={(e) => setFacultySubject(e.target.value)}
                options={ddlFacultySubject ? ddlFacultySubject : test}
                errors={errors.facultySubject}
              />
            </Grid>
            <Grid item xs={3}>
                <div style={{ height: "10px" }}></div>
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
        <TableContainer className={classes.table}>
            <TblHead />

            <TableBody>
              {tableDataAfterPagingAndSorting().map((item) => (
                <OldQuestionsTableCollapse item={item} key={item.$id} />
              ))}
            </TableBody>
        
          </TableContainer>
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
