import { SurveyQuestionBox, ErrorOutlineIcon, Stack } from "@components";
import { COLOR_ERROR } from "@constants";

interface RequiredSurveyQuestionBoxProp {
  children: React.ReactNode;
}

function RequiredSurveyQuestionBox({
  children,
}: RequiredSurveyQuestionBoxProp) {
  return (
    <SurveyQuestionBox
      borderColor={COLOR_ERROR}
      description={
        <Stack direction="row" alignItems="center" spacing={1}>
          <ErrorOutlineIcon />
          <p>필수 질문입니다.</p>
        </Stack>
      }
      descriptionColor={COLOR_ERROR}
    >
      {children}
    </SurveyQuestionBox>
  );
}

export default RequiredSurveyQuestionBox;
