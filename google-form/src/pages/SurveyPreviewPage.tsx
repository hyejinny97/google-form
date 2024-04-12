import { Outlet, Form } from "react-router-dom";
import styled from "@emotion/styled";
import {
  SurveyPreviewPageTitleBox,
  SurveyPreviewPageUtilBox,
  SurveyPreviewPageQuestionList,
} from "@components";

const StyledSurveyPreviewPage = styled.div`
  position: relative;
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 1rem;
  min-height: 100%;
`;

const StyledSurveyPreviewPageUtilBox = styled(SurveyPreviewPageUtilBox)`
  position: sticky;
  top: 1rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;

function SurveyPreviewPage() {
  return (
    <StyledSurveyPreviewPage>
      <Left>
        <SurveyPreviewPageTitleBox />
        <Form method="post">
          <SurveyPreviewPageQuestionList />
          <Outlet />
        </Form>
      </Left>
      <Right>
        <StyledSurveyPreviewPageUtilBox />
      </Right>
    </StyledSurveyPreviewPage>
  );
}

export default SurveyPreviewPage;
