import { Box } from "@components";
import { BOX_MARGIN } from "@constants";

interface SurveyQuestionBoxProps {
  className?: string;
  children?: React.ReactNode | string;
}

function SurveyQuestionBox({ className, children }: SurveyQuestionBoxProps) {
  return (
    <Box className={className} sx={{ mt: BOX_MARGIN }}>
      {children}
    </Box>
  );
}

export default SurveyQuestionBox;
