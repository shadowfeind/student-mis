import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import InputControl from "../../../components/controls/InputControl";
import { useForm, Form } from "../../../customHooks/useForm";
import DatePickerControl from "../../../components/controls/DatePickerControl";
import { putSingleAssignmentAction } from "./AssignmentActions";
import { API_URL } from "../../../constants";

const initialFormValues = {
  IDAssignment: 0,
  IDHREmployee: 0,
  IDFacultyProgramLink: 0,
  IDAcademicYear: 0,
  IDAcademicSubject: 0,
  IDLevel: 0,
  Section: 0,
  IDAcademicShift: 0,
  ReceiverID: 0,
  AssignmentName: "",
  AssignmentSummary: "",
  TeacherComment: "",
  StudentComment: "",
  FolderName: "",
  DocumentName: "",
  DocumentSubmitted: "",
  TotalMark: 0,
  MarksObtained: "",
  AssignmentSubmitCode: 0,
  AssignmentDate: "2022-02-03T00:00:00",
  AssignmentTime: "00:00:00",
  DueTime: "00:00:00",
  DueDate: "2022-02-03T00:00:00",
  SubmittedDate: "0001-01-01T00:00:00",
  CreatedBy: "",
  TeacherMobileNumber: "",
  FullName: "",
  RollNo: "",
  MobileNumber: "",
  SubjectName: "",
  UniversityRegistrationNumber: "",
  IsActive: true,
  Created_On: "2022-02-03T16:28:30.4451629",
  Updated_On: "0001-01-01T00:00:00",
};

const AssignmentEditForm = ({
  singleAssignment,
  setOpenPopup,
  assignmentImage,
}) => {
  const [image, setImage] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();

  const { values, setValues, handleInputChange, errors, setErrors } =
    useForm(initialFormValues);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    temp.image = !image ? "This File Is Required" : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(putSingleAssignmentAction(image, values));
    }
  };

  const handleImage = (event) => {
    let imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (x) => {
      setImgSrc(x.target.result);
    };
    reader.readAsDataURL(imageFile);
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (singleAssignment) {
      setValues({ ...singleAssignment });
    }
  }, [singleAssignment]);

  const symbolsArr = ["e", "E", "+", "-", "."];

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container style={{ fontSize: "12px" }}>
          <Grid item xs={6}>
            <InputControl
              disabled
              name="FullName"
              label="Full Name"
              value={values.CreatedBy}
              variant="filled"
            />
            <InputControl
              disabled
              name="TeacherMobileNumber"
              label="Mobile Number"
              value={values.TeacherMobileNumber}
              variant="filled"
            />

            <InputControl
              disabled
              name="AssignmentDate"
              label="FromDate"
              value={values.AssignmentDate}
              variant="filled"
            />
            <InputControl
              disabled
              name="AssignmentSummary"
              label="Assignment Summary"
              value={values.AssignmentSummary}
              variant="filled"
            />
            <InputControl
              name="ImageUploaded"
              // value={values.ClassLocation}
              onChange={(e) => handleImage(e)}
              type="file"
              errors={errors.image}
            />
            <img
              src={
                imgSrc
                  ? imgSrc
                  : assignmentImage && `${API_URL}${assignmentImage}`
              }
              height={200}
              width={200}
            />
          </Grid>
          <Grid item xs={6}>
            <InputControl
              disabled
              name="TotalMark"
              label="Full Marks"
              value={values.TotalMark}
              onKeyDown={(e) =>
                symbolsArr.includes(e.key) && e.preventDefault()
              }
              variant="filled"
            />
            <InputControl
              disabled
              name="AssignmentName"
              label="Assignment Name"
              value={values.AssignmentName}
              variant="filled"
            />
            <InputControl
              disabled
              name="DueDate"
              label="DueDate"
              value={values.DueDate}
              variant="filled"
            />
            <InputControl
              disabled
              name="MarksObtained"
              label="Marks Obtained"
              onKeyDown={(e) =>
                symbolsArr.includes(e.key) && e.preventDefault()
              }
              type="number"
              value={values.MarksObtained}
              variant="filled"
            />
            <InputControl
              disabled
              name="TeacherComment"
              label="Teacher Comment"
              value={values.TeacherComment}
              variant="filled"
            />
            <InputControl
              name="StudentComment"
              label="StudentComment"
              value={values.StudentComment}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingTop: "10px",
            marginTop: "10px",
            borderTop: "1px solid #f3f3f3",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenPopup(false)}
            style={{ margin: "10px 0 0 10px" }}
          >
            CANCEL
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: "10px 0 0 10px" }}
          >
            SUBMIT
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AssignmentEditForm;
