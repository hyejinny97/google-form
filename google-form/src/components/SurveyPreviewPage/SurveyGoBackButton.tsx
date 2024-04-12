import { useNavigate } from "react-router-dom";
import { Button } from "@components";
import { PATH_SURVEY_PREVIEW } from "@constants";

function SurveyGoBackButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(PATH_SURVEY_PREVIEW);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      되돌아가기
    </Button>
  );
}

export default SurveyGoBackButton;
