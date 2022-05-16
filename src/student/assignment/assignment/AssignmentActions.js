
import { API_URL, axiosInstance, tokenConfig } from "../../../constants";
import {
  DOWNLOAD_ASSIGNMENT_FAIL,
  DOWNLOAD_ASSIGNMENT_REQUEST,
  DOWNLOAD_ASSIGNMENT_SUCCESS,
  DOWNLOAD_SUBMITTED_ASSIGNMENT_FAIL,
  DOWNLOAD_SUBMITTED_ASSIGNMENT_REQUEST,
  DOWNLOAD_SUBMITTED_ASSIGNMENT_SUCCESS,
  GET_ALL_ASSIGNMENT_FAIL,
  GET_ALL_ASSIGNMENT_REQUEST,
  GET_ALL_ASSIGNMENT_SUCCESS,
  GET_ASSIGNMENT_LIST_FAIL,
  GET_ASSIGNMENT_LIST_REQUEST,
  GET_ASSIGNMENT_LIST_SUCCESS,
  GET_SINGLE_ASSIGNMENT_FAIL,
  GET_SINGLE_ASSIGNMENT_REQUEST,
  GET_SINGLE_ASSIGNMENT_SUCCESS,
  PUT_SINGLE_ASSIGNMENT_FAIL,
  PUT_SINGLE_ASSIGNMENT_REQUEST,
  PUT_SINGLE_ASSIGNMENT_SUCCESS,
} from "./AssignmentConstant";

export const getAllAssignmentAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ASSIGNMENT_REQUEST });

    const { data } = await axiosInstance.get(
      `${API_URL}/api/StudentSubmission/GetAllStudentSubmission
            `,
      tokenConfig()
    );

    dispatch({
      type: GET_ALL_ASSIGNMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ASSIGNMENT_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getAssignmentListAction =
  (year, program, classId, shift, facultySubject) => async (dispatch) => {
    try {
      dispatch({ type: GET_ASSIGNMENT_LIST_REQUEST });

      const { data } = await axiosInstance.get(
        `${API_URL}/api/StudentSubmission/GetListStudentSubmission?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&idShift=${shift}&idAcademicFacultySubjectLink=${facultySubject}`,
        tokenConfig()
      );

      dispatch({
        type: GET_ASSIGNMENT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ASSIGNMENT_LIST_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getSingleAssignmentAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_ASSIGNMENT_REQUEST });

    const { data } = await axiosInstance.get(
      `${API_URL}/api/StudentSubmission/GetSignleToEditStudentSubmission/${id}`,
      tokenConfig()
    );

    dispatch({
      type: GET_SINGLE_ASSIGNMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_ASSIGNMENT_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const putSingleAssignmentAction =
  (image, assignment) => async (dispatch) => {
    try {
      dispatch({ type: PUT_SINGLE_ASSIGNMENT_REQUEST });

      let formData = new FormData();
      formData.append("ImageUploaded", image);

      const { data } = await axiosInstance.post(
        `${API_URL}/api/StudentSubmission/FileUpload`,
        formData,
        tokenConfig()
      );

      console.log(assignment)

      if (data) {
        const newData = {
          ...assignment,
          DocumentSubmitted: data,
        };
        const jsonData = JSON.stringify({
          dbStudentSubmissionModel: newData,
        });


        await axiosInstance.put(
          `${API_URL}/api/StudentSubmission/PutStudentSubmission`,
          jsonData,
          tokenConfig()
        );
      }

      dispatch({
        type: PUT_SINGLE_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PUT_SINGLE_ASSIGNMENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

  export const downloadAssignmentAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: DOWNLOAD_ASSIGNMENT_REQUEST });
  
      const test = `${API_URL}/api/StudentSubmission/DownloadDoc/${id}`;
  
      window.open(test, "_blank");
      dispatch({
        type: DOWNLOAD_ASSIGNMENT_SUCCESS,

      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_ASSIGNMENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

  export const downloadSubmittedAssignmentAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: DOWNLOAD_SUBMITTED_ASSIGNMENT_REQUEST });
  
      const test = `${API_URL}/api/StudentSubmission/DownloadSubmittedDoc/${id}`;
  
      window.open(test, "_blank");
      dispatch({
        type: DOWNLOAD_SUBMITTED_ASSIGNMENT_SUCCESS,
       
      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_SUBMITTED_ASSIGNMENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
  