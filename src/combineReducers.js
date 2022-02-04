import { combineReducers } from "redux";
import {
  createAcademicGradingReducer,
  getAllAcademicGradingReducer,
  getSingleAcademicGradingforEditReducer,
  getSingleAcademicGradingReducer,
  updateSingleAcademicGradingReducer,
} from "./student/academicGrading/AcademicGradingReducers";
import {
  downloadAssignmentReducer,
  getAllAssignmentReducer,
  getAssignmentListReducer,
  getSingleAssignmentReducer,
  putSingleAssignmentReducer,
} from "./student/assignment/assignment/AssignmentReducers";
import {
  getAllStudentMonthlyPresentSheetReducer,
  getEnglishDateReducer,
  getListForPresentStudentReducer,
  getListForUpdateStudentPresentReducer,
  getListStudentPresentReducer,
  getSubjectOptionsForSelectReducer,
  postListStudentPresentReducer,
} from "./student/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetReducers";
import {
  getAllTotalStudentAttendanceReducer,
  getListTotalStudentAttendanceReducer,
} from "./student/attendance/totalStudentAttendance/TotalStudentAttendanceReducers";
import {
  createExamDivisionReducer,
  getAllExamDivisionReducer,
  getSingleExamDivisionEditReducer,
  getSingleExamDivisionReducer,
  updateSingleExamDivisionReducer,
} from "./student/examDivision/ExamDivisionReducers";
import {
  getAllAcademicStudentExamdataReducer,
  getEventReducer,
  getEventScheduleReducer,
  getExamEntryBulkReducer,
  getExamEntrySearchDataReducer,
} from "./student/examMarkEntry/ExamMarkEntryReducers";

import {
  getAllExamScheduleInitialDataReducer,
  getExamScheduleListReducer,
} from "./student/examSchedule/ExamScheduleReducers";
import {
  getAllContactAddress,
  getSingleContactAddressReducer,
  updateSingleContactAddressReducer,
} from "./student/pid/contactAddress/ContactAddressReducers";
import {
  getAllContactNumber,
  getSingleContactNumberReducer,
  updateSingleContactNumberReducer,
} from "./student/pid/contactNumber/ContactNumberReducers";
import {
  createSingleEducationReducer,
  educationCreateReducer,
  getAllEducation,
  getAllEducationCreateReducer,
  getSingleEducationReducer,
  updateSingleEducationReducer,
} from "./student/pid/education/EducationReducers";
import {
  getAllEmail,
  getSingleEmailReducer,
  updateSingleEmailReducer,
} from "./student/pid/email/EmailReducers";
import {
  createFamilyMemberReducer,
  createSingleFamilyMemberReducer,
  familyMemberCreateReducer,
  getAllFamilyMember,
  getAllFamilyMemberCreateReducer,
  getSingleCreateFamilyMemberReducer,
  getSingleFamilyMemberReducer,
  updateSingleFamilyMemberReducer,
} from "./student/pid/familyMember/FamilyMemberReducers";
import {
  getAllGuardian,
  getSingleGuardianReducer,
  updateSingleGuardianReducer,
} from "./student/pid/gurdian/GuardianReducers";
import {
  createSingleHobbyReducer,
  getAllHobby,
  getAllHobbyCreateReducer,
  getSingleHobbyReducer,
  hobbyCreateReducer,
  updateSingleHobbyReducer,
} from "./student/pid/hobby/HobbyReducers";
import {
  createSingleJobHistoryReducer,
  getAllJobHistory,
  getAllJobHistoryCreateReducer,
  getSingleJobHistoryReducer,
  jobHistoryCreateReducer,
  updateSingleJobHistoryReducer,
} from "./student/pid/jobHistory/JobHistoryReducers";
import {
  getAllPersonalInformation,
  getSinglePersonalInformationReducer,
  updateSinglePersonalInformationReducer,
} from "./student/pid/personalinformation/PersonalInformationReducers";
import {
  createSingleSkillReducer,
  getAllSkill,
  getAllSkillCreateReducer,
  getSingleSkillReducer,
  skillCreateReducer,
  updateSingleSkillReducer,
} from "./student/pid/skill/SkillReducers";
import {
  createSingleTrainingReducer,
  getAllTraining,
  getAllTrainingCreateReducer,
  getSingleTrainingReducer,
  trainingCreateReducer,
  updateSingleTrainingReducer,
} from "./student/pid/training/TrainingReducers";
import { getAllUploadPhoto, uploadPhotoReducer } from "./student/pid/uploadPhoto/UploadPhotoReducers";
import {
  getAllNewResourcesStudentReducer,
  getNewResourcesStudentListReducer,
} from "./student/resources/newResourcesStudent/NewResourcesStudentReducers";

export const reducers = combineReducers({
  getAllAcademicStudentExamdata: getAllAcademicStudentExamdataReducer,
  getEvent: getEventReducer,
  getEventSchedule: getEventScheduleReducer,
  getExamEntrySearchData: getExamEntrySearchDataReducer,
  getExamEntryBulk: getExamEntryBulkReducer,
  academicGrading: getAllAcademicGradingReducer,
  getSingleAcademicGrading: getSingleAcademicGradingReducer,
  createAcademicGrading: createAcademicGradingReducer,
  getSingleAcademicGradingforEdit: getSingleAcademicGradingforEditReducer,
  updateSingleAcademicGrading: updateSingleAcademicGradingReducer,
  getAllExamDivision: getAllExamDivisionReducer,
  getSingleExamDivision: getSingleExamDivisionReducer,
  createExamDivision: createExamDivisionReducer,
  getSingleExamDivisionEdit: getSingleExamDivisionEditReducer,
  updateSingleExamDivision: updateSingleExamDivisionReducer,
  getAllExamScheduleInitialData: getAllExamScheduleInitialDataReducer,
  getExamScheduleList: getExamScheduleListReducer,
 //user profile reducers starts
  //PID PersonalInformation
  getAllPersonalInformation: getAllPersonalInformation,
  getSinglePersonalInformation: getSinglePersonalInformationReducer,
  updateSinglePersonalInformation : updateSinglePersonalInformationReducer,
  //PID ContactAddress
  getAllContactAddress : getAllContactAddress,
  getSingleContactAddress: getSingleContactAddressReducer,
  updateSingleContactAddress: updateSingleContactAddressReducer,
  //PiD Contactnumber
  getAllContactNumber: getAllContactNumber,
  getSingleContactNumber: getSingleContactNumberReducer,
  updateSingleContactNumber : updateSingleContactNumberReducer,
  //PID Education
  getAllEducation: getAllEducation,
  getAllEducationCreate: getAllEducationCreateReducer,
  createSingleEducation : createSingleEducationReducer,
  educationCreate : educationCreateReducer,
  //PID Email
  getAllEmail: getAllEmail,
  getSingleEmail: getSingleEmailReducer,
  updateSingleEmail: updateSingleEmailReducer,
 //Reducer Ends
  //PID FamilyMember
  getAllFamilyMember: getAllFamilyMember,
  getSingleFamilyMember :getSingleFamilyMemberReducer,
  updateSingleFamilyMember : updateSingleFamilyMemberReducer,
createFamilyMember : createFamilyMemberReducer,
getAllFamilyMemberCreate:getAllFamilyMemberCreateReducer,
//PID Guardian
getAllGuardian: getAllGuardian,
getSingleGuardian: getSingleGuardianReducer,
updateSingleGuardian : updateSingleGuardianReducer,
  //PID Hobby
  getAllHobby : getAllHobby,
  getAllHobbyCreate : getAllHobbyCreateReducer,
  createSingleHobby: createSingleHobbyReducer,
  hobbyCreate : hobbyCreateReducer,
  //PID JobHistory
  getAllJobHistory: getAllJobHistory,
  getAllJobHistoryCreate: getAllJobHistoryCreateReducer,
  createSingleJobHistory: createSingleJobHistoryReducer,
  jobHistoryCreate : jobHistoryCreateReducer,
  //PID Skill
  getAllSkill : getAllSkill,
  getAllSkillCreate: getAllSkillCreateReducer,
  createSingleSkill : createSingleSkillReducer,
  skillCreate: skillCreateReducer,
  //PID Training
  getAllTraining : getAllTraining,
  getAllTrainingCreate : getAllTrainingCreateReducer,
  createSingleTraining: createSingleTrainingReducer,
  trainingCreate: trainingCreateReducer,
  //PID uploadPhoto
  uploadPhoto: uploadPhotoReducer,
  //user profile reducers ends
  //attendance start
  getAllStudentMonthlyPresentSheet: getAllStudentMonthlyPresentSheetReducer,
  getSubjectOptionsForSelect: getSubjectOptionsForSelectReducer,
  getEnglishDate: getEnglishDateReducer,
  getListStudentPresent: getListStudentPresentReducer,
  getListForUpdateStudentPresent: getListForUpdateStudentPresentReducer,
  getListForPresentStudent: getListForPresentStudentReducer,
  postListStudentPresent: postListStudentPresentReducer,
  getAllTotalStudentAttendance: getAllTotalStudentAttendanceReducer,
  getListTotalStudentAttendance: getListTotalStudentAttendanceReducer,
  //attendance end
  //Resources(New Resources Student Reducers)
  getAllNewResourcesStudent: getAllNewResourcesStudentReducer,
  getNewResourcesStudentList: getNewResourcesStudentListReducer,
  //Assignment Reducers
  getAllAssignment: getAllAssignmentReducer,
  getAssignmentList: getAssignmentListReducer,
  getSingleAssignment: getSingleAssignmentReducer,
  putSingleAssignment: putSingleAssignmentReducer,
  downloadAssignment: downloadAssignmentReducer,
});
