import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { goBackSurvey } from "@stores";
import { PATH_SURVEY_PREVIEW } from "@constants";

function SurveyGoBackButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    dispatch(goBackSurvey());
    navigate(PATH_SURVEY_PREVIEW);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      되돌아가기
    </Button>
  );
}

export default SurveyGoBackButton;
