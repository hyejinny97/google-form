import styled from "@emotion/styled";
import {
  SurveyEditPageTitleBox,
  SurveyEditPageQuestionList,
  SurveyEditPageUtilBox,
} from "@components";

const StyledSurveyEditPage = styled.div`
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

const StyledSurveyEditPageUtilBox = styled(SurveyEditPageUtilBox)`
  position: sticky;
  top: 1rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;

function SurveyEditPage() {
  return (
    <StyledSurveyEditPage>
      <Left>
        <SurveyEditPageTitleBox />
        <SurveyEditPageQuestionList />
      </Left>
      <Right>
        <StyledSurveyEditPageUtilBox />
      </Right>
    </StyledSurveyEditPage>
  );
}

export default SurveyEditPage;
