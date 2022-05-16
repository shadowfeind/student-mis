import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import { Search } from "@material-ui/icons";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import SelectControl from "../../../components/controls/SelectControl";
import LoadingComp from "../../../components/LoadingComp";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import ClassNotificationStudentTableCollapse from "./ClassNotificationTableCollapse";
import { getAllClassNotificationStudentAction, getListClassNotificationStudentAction } from "./ClassNotificationActions";
import { GET_ALL_CLASS_NOTIFICATION_STUDENT_RESET, GET_LIST_CLASS_NOTIFICATION_STUDENT_RESET } from "./ClassNotificationConstants";

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
    { id: "FullName", label: "Full Name" },
    { id: "Messages", label: "Messages" },
    { id: "PostedDate", label: "Posted Date" },
  ];

  const ClassNotification = () => {
    const [academicYear, setAcademicYear] = useState([]);
    const [academicYearValue, setAcademicYearValue] = useState("");
    const [shift, setShift] = useState([]);
    const [shiftValue, setShiftValue] = useState("");
    const [program, setProgram] = useState([]);
    const [programValue, setProgramValue] = useState("");
    const [section, setSection] = useState([]);
    const [sectionValue, setSectionValue] = useState("");
    const [classOpt, setClassOpt] = useState([]);
    const [classOptValue, setClassOptValue] = useState("");
    const [tableData, setTableData] = useState([]);
    const [errors, setErrors] = useState({});
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
  
    const { classNotificationStudent, error } = useSelector(
      (state) => state.getAllClassNotificationStudent
    );
  
    const { listClassNotificationStudent,loading, error: listClassNotificationStudentError } =
      useSelector((state) => state.getListClassNotificationStudent);

      if (error) {
        setNotify({
          isOpen: true,
          message: error,
          type: "error",
        });
        dispatch({ type: GET_ALL_CLASS_NOTIFICATION_STUDENT_RESET });
      }
    
      if (listClassNotificationStudentError) {
        setNotify({
          isOpen: true,
          message: listClassNotificationStudentError,
          type: "error",
        });
        dispatch({ type: GET_LIST_CLASS_NOTIFICATION_STUDENT_RESET });
      }

      useEffect(() => {
        dispatch({ type: "GET_LINK", payload: "/notification" });
        if (!classNotificationStudent) {
          dispatch(getAllClassNotificationStudentAction());
        }
        if (classNotificationStudent) {
          setAcademicYear(classNotificationStudent?.searchFilterModel.ddlAcademicYear);
          setShift(classNotificationStudent?.searchFilterModel.ddlAcademicShift);
          setShiftValue(classNotificationStudent?.searchFilterModel.ddlAcademicShift[0].Key);
          setProgramValue(classNotificationStudent?.searchFilterModel.ddlFacultyProgramLink[0].Key);
          setSection(classNotificationStudent?.searchFilterModel.ddlSection);
          setSectionValue(classNotificationStudent?.searchFilterModel.ddlSection[0].Key);
          setClassOpt(classNotificationStudent?.searchFilterModel.ddlClass);
          setClassOptValue(classNotificationStudent?.searchFilterModel.ddlClass[0].Key);
        }
      }, [dispatch, classNotificationStudent]);
    
      useEffect(() => {
        if (listClassNotificationStudent) {
          setTableData([...listClassNotificationStudent.dbModelClassNotification]);
        }
      }, [listClassNotificationStudent]);

      const validate = () => {
        let temp = {};
        temp.academicYearValue = !academicYearValue ? "This feild is required" : "";
        temp.programValue = !programValue ? "This feild is required" : "";
        temp.shiftValue = !shiftValue ? "This feild is required" : "";
        temp.classOptValue = !classOptValue ? "This feild is required" : "";
        temp.sectionValue = !sectionValue ? "This feild is required" : "";
    
        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
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
                x.FullName.toLowerCase().includes(e.target.value)
              );
            }
          },
        });
      };


      const listSearchHandler = () => {
        if (validate()) {
          dispatch(
            getListClassNotificationStudentAction(
              academicYearValue,
              programValue,
              classOptValue,
              shiftValue,
              sectionValue
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
                    name="academicYear"
                    label="Academic Year"
                    value={academicYearValue}
                    onChange={(e) => setAcademicYearValue(e.target.value)}
                    options={academicYear}
                    errors={errors.academicYearValue}
                  />
                </Grid>
                {/* <Grid item xs={3}>
                  <SelectControl
                    name="ddlFacultyProgramLink"
                    label="Program / Faculty"
                    value={programValue}
                    onChange={(e) => setProgramValue(e.target.value)}
                    options={program}
                    errors={errors.programValue}
                  />
                </Grid> */}
                <Grid item xs={3}>
                  <SelectControl
                    name="ddlClass"
                    label="Class"
                    value={classOptValue}
                    onChange={(e) => setClassOptValue(e.target.value)}
                    options={classOpt}
                    errors={errors.classOptValue}
                  />
                </Grid>
    
                <Grid item xs={3}>
                  <SelectControl
                    name="ddlSection"
                    label="Section"
                    value={sectionValue}
                    onChange={(e) => setSectionValue(e.target.value)}
                    options={section}
                    errors={errors.sectionValue}
                  />
                </Grid>
                <Grid item xs={3}>
                  <SelectControl
                    name="ddlAcademicShift"
                    label="Shift"
                    value={shiftValue}
                    onChange={(e) => setShiftValue(e.target.value)}
                    options={shift}
                    errors={errors.shiftValue}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ margin: "20px 0 0 20px" }}
                    onClick={listSearchHandler}
                  >
                    SEARCH
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
            {loading ? (
            <LoadingComp />):(
              <>
            <TableContainer className={classes.table}>
              <TblHead />
    
              <TableBody>
                {tableDataAfterPagingAndSorting().map((item) => (
                  <ClassNotificationStudentTableCollapse item={item} key={item.$id} />
                ))}
              </TableBody>
            </TableContainer>
            <TblPagination />
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
    
    export default ClassNotification;
    