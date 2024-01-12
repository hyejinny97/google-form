import { useSelector } from "react-redux";
import { SurveyPreviewPageQuestionBox } from "@components";
import type { RootState } from "@stores";

function SurveyPreviewPageQuestionList() {
  const questions = useSelector((state: RootState) => state.survey.questions);
  const isSurveySubmitted = useSelector(
    (state: RootState) => state.isSurveySubmitted
  );
  const surveyPreviewAnswers = useSelector(
    (state: RootState) => state.surveyPreviewAnswer
  );

  return (
    <>
      {questions.map((question) => (
        <SurveyPreviewPageQuestionBox
          key={question.id}
          questionData={question}
          answerData={
            surveyPreviewAnswers.find(
              (answer) => answer.questionId === question.id
            )?.answer
          }
          disabled={isSurveySubmitted}
        />
      ))}
    </>
  );
}

export default SurveyPreviewPageQuestionList;
