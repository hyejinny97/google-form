import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useSelector, shallowEqual } from "react-redux";
import { Divider, MuiBox, SurveyTitleBox } from "@components";
import type { RootState } from "@stores";
import {
  TITLE_BOX_TITLE_FONT_SIZE,
  TITLE_BOX_TITLE_DESC_MARGIN,
} from "@constants";

const SurveyTitle = styled.p`
  font-size: ${TITLE_BOX_TITLE_FONT_SIZE}px;
`;

const SurveyTitleDesc = styled.p`
  margin: ${TITLE_BOX_TITLE_DESC_MARGIN};
`;

const SubText = styled(MuiBox)`
  margin-top: 1rem;
`;

function SurveyPreviewPageTitleBox() {
  const [surveyTitle, surveyTitleDesc] = useSelector(
    (state: RootState) => [
      state.survey.surveyTitle,
      state.survey.surveyTitleDesc,
    ],
    shallowEqual
  );
  const theme = useTheme();

  return (
    <SurveyTitleBox>
      <SurveyTitle>{surveyTitle}</SurveyTitle>
      <SurveyTitleDesc>{surveyTitleDesc}</SurveyTitleDesc>
      <Divider />
      <SubText sx={{ color: theme.palette.error.main }}>
        * 표시는 필수 질문임
      </SubText>
    </SurveyTitleBox>
  );
}

export default SurveyPreviewPageTitleBox;
