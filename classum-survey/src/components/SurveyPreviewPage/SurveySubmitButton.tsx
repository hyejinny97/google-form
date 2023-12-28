import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { submitSurvey } from "@stores";
import { PATH_SURVEY_PREVIEW_SUBMIT } from "@constants";

function SurveySubmitButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    dispatch(submitSurvey());
    navigate(PATH_SURVEY_PREVIEW_SUBMIT);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      제출
    </Button>
  );
}

export default SurveySubmitButton;
