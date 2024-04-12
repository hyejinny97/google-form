import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@components";
import { clearSurveyPreviewAnswer } from "@stores";

function SurveyClearButton() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleClearButtonClick = () => {
    dispatch(clearSurveyPreviewAnswer());
    handleModalClose();
  };

  return (
    <>
      <Button color="secondary" onClick={handleModalOpen}>
        양식 지우기
      </Button>
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>작성한 답변을 모두 지우시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            답변을 지우면 되돌릴 수 없습니다.
            <br />
            정말 지우시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClearButtonClick}>네</Button>
          <Button onClick={handleModalClose}>아니요</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SurveyClearButton;
