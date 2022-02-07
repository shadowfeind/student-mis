import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../../components/ConfirmDialog";
import Notification from "../../components/Notification";
import { API_URL } from "../../constants";
import CustomContainer from "../../components/CustomContainer";
import { Button, Toolbar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import { GET_ALL_CLASS_SCHEDULE_RESET } from "./ClassScheduleConstant";
import { getAllClassScheduleAction } from "./ClassScheduleAction";

const ClassSchedule=()=>{

    const [url, setUrl] = useState("");
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
  const dispatch = useDispatch();

  const { classSchedule, error: classScheduleError } = useSelector(
    (state) => state.getAllClassSchedule
  );

  if (classScheduleError) {
    setNotify({
      isOpen: true,
      message: classScheduleError,
      type: "error",
    });
    dispatch({ type: GET_ALL_CLASS_SCHEDULE_RESET });
  }

  useEffect(() => {
    if (classSchedule) {
        setUrl(`${API_URL}${classSchedule.FullPath}`);
      }  
      if (!classSchedule) {
        dispatch(getAllClassScheduleAction());
      }
   
  }, [classSchedule]);
// useEffect(()=>{
//     dispatch(getAllClassScheduleAction(1));
// })
return (
    <>
      <CustomContainer>
      {classSchedule && <iframe src={url} width="100%" height="700" />}
      </CustomContainer>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
export default ClassSchedule;