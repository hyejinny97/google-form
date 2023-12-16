import { useSelector } from "react-redux";
import type { RootState } from "@stores";
import { SurveyEditPageQuestionBox } from "@components";

function SurveyEditPageQuestionList() {
  const questions = useSelector((state: RootState) => state.survey.questions);

  return (
    <>
      {questions.map((question) => (
        <SurveyEditPageQuestionBox type={question.type} />
      ))}
    </>
  );
}

export default SurveyEditPageQuestionList;
