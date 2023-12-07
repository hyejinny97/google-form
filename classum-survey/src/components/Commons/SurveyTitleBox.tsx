import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Box } from "@components";
import {
  DEFAULT_PADDING_UNIT,
  DEFAULT_BORDER_RADIUS_UNIT,
  BOX_PADDING,
  BOX_BORDER_RADIUS,
} from "@constants";

interface SurveyTitleBoxProps {
  children?: React.ReactNode | string;
}

const BAR_HEIGHT = 10; // 단위: px
const BAR_BORDER_RADIUS = BOX_BORDER_RADIUS * DEFAULT_BORDER_RADIUS_UNIT;

function SurveyTitleBox({ children }: SurveyTitleBoxProps) {
  const theme = useTheme();

  const StyledBox = styled(Box)`
    position: relative;
    padding-top: ${BOX_PADDING * DEFAULT_PADDING_UNIT + BAR_HEIGHT}px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${BAR_HEIGHT}px;
      border-radius: ${BAR_BORDER_RADIUS}px ${BAR_BORDER_RADIUS}px 0 0;
      background-color: ${theme.palette.secondary.main};
    }
  `;

  return <StyledBox>{children}</StyledBox>;
}

export default SurveyTitleBox;
