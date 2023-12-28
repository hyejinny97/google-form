import { useSelector } from "react-redux";
import { SurveyPreviewPageQuestionBox } from "@components";
import type { RootState } from "@stores";

function SurveyPreviewPageQuestionList() {
  const questions = useSelector((state: RootState) => state.survey.questions);
  const isSurveySubmitted = useSelector(
    (state: RootState) => state.isSurveySubmitted
  );

  return (
    <>
      {questions.map((question) => (
        <SurveyPreviewPageQuestionBox
          key={question.id}
          data={question}
          disabled={isSurveySubmitted}
        />
      ))}
    </>
  );
}

export default SurveyPreviewPageQuestionList;
