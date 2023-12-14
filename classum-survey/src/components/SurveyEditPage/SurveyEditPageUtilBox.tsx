import { IconButton } from "@mui/material";
import { Box, AddCircleOutlineIcon } from "@components";

interface SurveyEditPageUtilBoxProps {
  className?: string;
}

function SurveyEditPageUtilBox({ className }: SurveyEditPageUtilBoxProps) {
  return (
    <div className={className}>
      <Box sx={{ p: 1 }}>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SurveyEditPageUtilBox;
