import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { PATH_SURVEY_PREVIEW_SUBMIT } from "@constants";

function SurveySubmitButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(PATH_SURVEY_PREVIEW_SUBMIT);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      제출
    </Button>
  );
}

export default SurveySubmitButton;
