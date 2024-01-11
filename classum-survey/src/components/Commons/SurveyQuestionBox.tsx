import { forwardRef } from "react";
import { Box as MuiBox } from "@mui/material";
import { Box } from "@components";
import {
  BOX_MARGIN,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_ERROR,
  COLOR_WARNING,
  COLOR_INFO,
  COLOR_SUCCESS,
} from "@constants";

type ColorsType =
  | typeof COLOR_PRIMARY
  | typeof COLOR_SECONDARY
  | typeof COLOR_ERROR
  | typeof COLOR_WARNING
  | typeof COLOR_INFO
  | typeof COLOR_SUCCESS;

interface SurveyQuestionBoxProps {
  className?: string;
  borderColor?: ColorsType;
  description?: React.ReactNode;
  descriptionColor?: ColorsType;
  children?: React.ReactNode;
}

const SurveyQuestionBox = forwardRef(
  (
    {
      className,
      borderColor,
      description,
      descriptionColor,
      children,
    }: SurveyQuestionBoxProps,
    ref
  ) => {
    return (
      <Box
        className={className}
        sx={{
          mt: BOX_MARGIN,
          borderColor: borderColor && `${borderColor}.main`,
        }}
        ref={ref}
      >
        {children}
        <MuiBox
          sx={{
            mt: 1,
            fontSize: 13,
            color: descriptionColor && `${descriptionColor}.main`,
          }}
        >
          {description}
        </MuiBox>
      </Box>
    );
  }
);

export default SurveyQuestionBox;
