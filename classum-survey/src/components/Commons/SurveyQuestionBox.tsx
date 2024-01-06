import { forwardRef } from "react";
import { Box } from "@components";
import { BOX_MARGIN } from "@constants";

interface SurveyQuestionBoxProps {
  className?: string;
  children?: React.ReactNode | string;
}

const SurveyQuestionBox = forwardRef(
  ({ className, children }: SurveyQuestionBoxProps, ref) => {
    return (
      <Box className={className} sx={{ mt: BOX_MARGIN }} ref={ref}>
        {children}
      </Box>
    );
  }
);

export default SurveyQuestionBox;
