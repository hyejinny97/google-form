import { useSelector } from "react-redux";
import { SurveyPreviewPageQuestionBox } from "@components";
import type { RootState } from "@stores";

function SurveyPreviewPageQuestionList() {
  const questions = useSelector((state: RootState) => state.survey.questions);
  return (
    <>
      {questions.map((question) => (
        <SurveyPreviewPageQuestionBox key={question.id} data={question} />
      ))}
    </>
  );
}

export default SurveyPreviewPageQuestionList;
