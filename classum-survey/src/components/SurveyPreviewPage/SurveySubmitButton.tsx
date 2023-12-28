import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { submitSurvey } from "@stores";

function SurveySubmitButton() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(submitSurvey());
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      제출
    </Button>
  );
}

export default SurveySubmitButton;
