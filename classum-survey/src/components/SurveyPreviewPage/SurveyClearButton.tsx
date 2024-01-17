import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { clearSurveyPreviewAnswer } from "@stores";

function SurveyClearButton() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(clearSurveyPreviewAnswer());
  };

  return (
    <Button color="secondary" onClick={handleButtonClick}>
      양식 지우기
    </Button>
  );
}

export default SurveyClearButton;
