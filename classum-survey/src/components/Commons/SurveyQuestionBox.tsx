import { Box } from "@components";
import { BOX_MARGIN } from "@constants";

interface SurveyQuestionBoxProps {
  children?: React.ReactNode | string;
}

function SurveyQuestionBox({ children }: SurveyQuestionBoxProps) {
  return <Box sx={{ mt: BOX_MARGIN }}>{children}</Box>;
}

export default SurveyQuestionBox;
