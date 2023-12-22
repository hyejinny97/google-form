import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Box, AddCircleOutlineIcon, VisibilityIcon } from "@components";
import { addQuestion } from "@stores";
import { PATH_SURVEY_PREVIEW } from "@constants";

interface SurveyEditPageUtilBoxProps {
  className?: string;
}

function SurveyEditPageUtilBox({ className }: SurveyEditPageUtilBoxProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Box sx={{ p: 1 }}>
        <IconButton onClick={() => dispatch(addQuestion())}>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={() => navigate(PATH_SURVEY_PREVIEW)}>
          <VisibilityIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SurveyEditPageUtilBox;
