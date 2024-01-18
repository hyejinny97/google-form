import { useNavigate } from "react-router-dom";
import { Box, EditIcon, IconButton } from "@components";
import { PATH_SURVEY_EDIT } from "@constants";

interface SurveyPreviewPageUtilBox {
  className?: string;
}

function SurveyPreviewPageUtilBox({ className }: SurveyPreviewPageUtilBox) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Box sx={{ p: 1 }}>
        <IconButton onClick={() => navigate(PATH_SURVEY_EDIT)}>
          <EditIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SurveyPreviewPageUtilBox;
