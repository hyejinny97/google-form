import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { Box, AddCircleOutlineIcon } from "@components";
import { addQuestion } from "@stores";

interface SurveyEditPageUtilBoxProps {
  className?: string;
}

function SurveyEditPageUtilBox({ className }: SurveyEditPageUtilBoxProps) {
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <Box sx={{ p: 1 }}>
        <IconButton onClick={() => dispatch(addQuestion())}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SurveyEditPageUtilBox;
