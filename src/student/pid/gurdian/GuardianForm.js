import React, { useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import InputControl from "../../../components/controls/InputControl";
import { useForm, Form } from "../../../customHooks/useForm";
import { useDispatch } from "react-redux";
import { updateSingleGuardianAction } from "./GuardianActions";

const initialFormValues = {
  IDHREmployee: 0,
  FatherName: "",
  FatherContactNo: "",
  FatherOccupation: "",
  FatherWorkingDesignation: "",
  FatherWorkingOrganization: "",
  FatherEmail: "",
  MotherName: "",
  MotherContactNo: "",
  MotherOccupation: "",
  MotherWorkingDesignation: "",
  MotherWorkingOrganization: "",
  MotherEmail: "",
  LocalGuardianName: "",
  LocalGuardianContactNo: "",
  LocalGuardianOccupation: "",
  LocalGuardianWorkingDesignation: "",
  LocalGuardianWorkingOrganization: "",
  LocalGuardianEmail: "",
  IDHRRole: 0,
};

const GuardianForm = ({ guardianForm, setOpenPopup }) => {
  const dispatch = useDispatch();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    temp.FatherName = !fieldValues.FatherName
      ? "This feild is required"
      : fieldValues.FatherName.length > 20
      ? "Must be less than 20 characters"
      : !fieldValues.FatherName.trim()
      ? "This feild is required"
      : "";

    temp.FatherContactNo = !fieldValues.FatherContactNo
      ? "This feild is required"
      : fieldValues.FatherContactNo.length < 7
      ? "Must be atleast 7 characters"
      : "";

    temp.FatherOccupation = !fieldValues.FatherOccupation
      ? "This feild is required"
      : fieldValues.FatherOccupation.length > 20
      ? "Must be less than 20 characters"
      : !fieldValues.FatherOccupation.trim()
      ? "This feild is required"
      : "";
  
    temp.MotherName = !fieldValues.MotherName
      ? "This feild is required"
      : fieldValues.MotherName.length > 20
      ? "Must be less than 20 characters"
      : !fieldValues.MotherName.trim()
      ? "This feild is required"
      : "";

    temp.LocalGuardianName = !fieldValues.LocalGuardianName
      ? "This feild is required"
      : fieldValues.LocalGuardianName.length > 20
      ? "Must be less than 20 characters"
      : !fieldValues.LocalGuardianName.trim()
      ? "This feild is required"
      : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors } =
    useForm(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(updateSingleGuardianAction(values));
      // alert("working");
    }
  };
  useEffect(() => {
    if (guardianForm) {
      setValues({ ...guardianForm });
    }
  }, [guardianForm]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container style={{ fontSize: "12px" }}>
        <Grid item xs={6}>
          <InputControl
            name="FatherName"
            label="Father Name"
            value={values.FatherName}
            onChange={handleInputChange}
            errors={errors.FatherName}
          />

          <InputControl
            name="FatherContactNo"
            label="Father Contact No"
            value={values.FatherContactNo}
            onChange={handleInputChange}
            errors={errors.FatherContactNo}
            type="number"
          />

          <InputControl
            name="FatherOccupation"
            label="Father Occupation"
            value={values.FatherOccupation}
            onChange={handleInputChange}
            errors={errors.FatherOccupation}
          />
          <InputControl
            name="FatherWorkingDesignation"
            label="Father Working Designation"
            value={values.FatherWorkingDesignation}
            onChange={handleInputChange}
            
          />
          <InputControl
            name="FatherEmail"
            label="Father Email"
            value={values.FatherEmail}
            onChange={handleInputChange}
            
          />
          <InputControl
            name="MotherName"
            label="Mother Name"
            value={values.MotherName}
            onChange={handleInputChange}
            errors={errors.MotherName}
          />
          <InputControl
            name="MotherContactNo"
            label="Mother Contact No"
            value={values.MotherContactNo}
            onChange={handleInputChange}
            type="number"
          />
          <InputControl
            name="MotherOccupation"
            label="Mother Occupation"
            value={values.MotherOccupation}
            onChange={handleInputChange}
 
          />
        </Grid>
        <Grid item xs={6}>
          <InputControl
            name="MotherWorkingDesignation"
            label="Mother Working Designation"
            value={values.MotherWorkingDesignation}
            onChange={handleInputChange}
 
          />
          <InputControl
            name="MotherWorkingOrganization"
            label="Mother Working Organization"
            value={values.MotherWorkingOrganization}
            onChange={handleInputChange}
    
          />

          <InputControl
            name="MotherEmail"
            label="Mother Email"
            value={values.MotherEmail}
            onChange={handleInputChange}
   
          />
          <InputControl
            name="LocalGuardianName"
            label="LocalGuardian Name"
            value={values.LocalGuardianName}
            onChange={handleInputChange}
            errors={errors.LocalGuardianName}
          />
          <InputControl
            name="LocalGuardianContactNo"
            label="LocalGuardian Contact No"
            value={values.LocalGuardianContactNo}
            onChange={handleInputChange}
        
            type="number"
          />
          <InputControl
            name="LocalGuardianOccupation"
            label="LocalGuardian Occupation"
            value={values.LocalGuardianOccupation}
            onChange={handleInputChange}
         
          />
          <InputControl
            name="LocalGuardianWorkingDesignation"
            label="LocalGuardian Working Designation"
            value={values.LocalGuardianWorkingDesignation}
            onChange={handleInputChange}
          
          />
          <InputControl
            name="LocalGuardianWorkingOrganization"
            label="LocalGuardian Working Organization"
            value={values.LocalGuardianWorkingOrganization}
            onChange={handleInputChange}
   
          />
          <InputControl
            name="LocalGuardianEmail"
            label="LocalGuardian Email"
            value={values.LocalGuardianEmail}
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
  );
};

export default GuardianForm;
