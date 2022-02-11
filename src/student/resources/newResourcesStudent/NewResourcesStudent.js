import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import SelectControl from "../../../components/controls/SelectControl";
import { DOWNLOAD_NEW_SOURCES_RESET, GET_ALL_NEW_SOURCES_STUDENT_RESET, GET_NEW_SOURCES_STUDENT_LIST_RESET } from "./NewResourcesStudentConstant";
import { getAllNewResourcesStudentAction, getNewResourcesStudentListAction } from "./NewResourcesStudentActions";
import NewResourcesStudentTableCollapse from "./NewResourcesStudentTableCollapse";

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
    { id: "ResourceName", label: "Resource Name" },
    { id: "ResourceDescription", label: "Resource Description" },
    { id: "PostedBy", label: "Posted By" },
    { id: "EffectiveForm", label: "Effective Form" },
    { id: "isActive", label: "IsActive" },
    { id: "Actions", label: "Actions", disableSorting: true },
  ];

  const NewResourcesStudent=()=>{
    const [ddlClass, setDdlClass] = useState([]);
    const [academicYearDdl, setAcademicYearDdl] = useState([]);
    const [programDdl, setProgramDdl] = useState([]);
    const [ddlShift, setDdlShift] = useState([]);
    const [programValue, setProgramValue] = useState(6);
    const [classId, setClassId] = useState(13);
    const [acaYear, setAcaYear] = useState(52);
    const [shift, setShift] = useState(2);
    const [errors, setErrors] = useState({});
    const [ddlSection, setDdlSection] = useState([]);
    const [section, setSection] = useState(1);
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
            x.EventName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  const { newResourcesStudent, error: newResourcesStudentError } =
  useSelector((state) => state.getAllNewResourcesStudent);

  const { newResourcesStudentList, error: newResourcesStudentListError } =
  useSelector((state) => state.getNewResourcesStudentList);

  const {
    success: downloadNewResourcesSuccess,
    file: downloadFile,
    error: downloadNewResourcesError,
  } = useSelector((state) => state.downloadOldQuestions);

  if (downloadFile) {
    var blob = new Blob([downloadFile]);
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }
  if (downloadNewResourcesError) {
    setNotify({
      isOpen: true,
      message: downloadNewResourcesError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_NEW_SOURCES_RESET });
  }
  if (newResourcesStudentError) {
    setNotify({
      isOpen: true,
      message: newResourcesStudentError,
      type: "error",
    });
    dispatch({ type: GET_ALL_NEW_SOURCES_STUDENT_RESET });
  }

  if (newResourcesStudentListError) {
    setNotify({
      isOpen: true,
      message: newResourcesStudentListError,
      type: "error",
    });
    dispatch({ type: GET_NEW_SOURCES_STUDENT_LIST_RESET });
  }

  const validate=()=>{
    let temp ={};
    temp.acaYear = !acaYear ? "This feild is required" : "";
    temp.programValue = !programValue ? "This feild is required" : "";
    temp.classId = !classId ? "This feild is required" : "";
    temp.section = !section ? "This feild is required" : "";
    temp.shift1 = !shift ? "This feild is required" : "";
    temp.facultySubject = !facultySubject ? "This feild is required" : "";
    
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  }
  
  useEffect(() => {
    if (!newResourcesStudent) {
      dispatch(getAllNewResourcesStudentAction());
    }
    if (newResourcesStudent) {
       
      setProgramDdl(
        newResourcesStudent.searchFilterModel.ddlFacultyProgramLink
      );
      setDdlClass(newResourcesStudent.searchFilterModel.ddlClass);
      setAcademicYearDdl(
        newResourcesStudent.searchFilterModel.ddlAcademicYear
      );
      setDdlShift(
        newResourcesStudent.searchFilterModel.ddlAcademicShift
      );
      setDdlSection(
        newResourcesStudent.searchFilterModel.ddlSection
      );
      setDdlFacultySubject(
        newResourcesStudent.searchFilterModel.ddlSubject
      );
    }
  }, [newResourcesStudent, dispatch]);

  useEffect(() => {
    if (newResourcesStudentList) {
      setTableData(newResourcesStudentList.courseDeliveyPlanStudentLst);
    }
  }, [newResourcesStudentList]);

      const handleExamScheduleSearch = () => {
        if (validate()) {
          dispatch(
            getNewResourcesStudentListAction(facultySubject, acaYear, programValue, classId, section, shift)
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
                    options={academicYearDdl ? academicYearDdl : test }
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
                    name="section"
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
                name="Shift"
                label="Shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                options={ddlShift ? ddlShift : test}
                errors={errors.shift1}
              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
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
        <div style={{ height: "15px" }}></div>
        <Toolbar>
          <InputControl
            className={classes.searchInput}
            label="Search New Resources Student"
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
        {newResourcesStudentList && (
          <TableContainer className={classes.table}>
            <TblHead />

            <TableBody>
              {tableDataAfterPagingAndSorting().map((item) => (
                <NewResourcesStudentTableCollapse item={item} key={item.$id} />
              ))}
            </TableBody>
        
          </TableContainer>
        )}

        {newResourcesStudentList && <TblPagination />}
      </CustomContainer>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
  }

  export default NewResourcesStudent;