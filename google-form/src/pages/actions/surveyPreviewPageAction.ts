import { redirect } from "react-router-dom";
import { store } from "@stores";
import { PATH_SURVEY_PREVIEW_SUBMIT } from "@constants";

export interface SurveyPreviewPageActionDataType {
  showRequiredQuestions?: boolean;
}

export default function surveyPreviewPageAction() {
  const questions = store.getState().survey.questions;
  const answers = store.getState().surveyPreviewAnswer;

  // required questions 모두 작성했는지 확인
  const isCompleted = questions.every((question) => {
    if (question.required) {
      const answer = answers.find(
        (answer) => answer.questionId === question.id
      );
      return (
        answer &&
        (Array.isArray(answer.answer) ? answer.answer.length : answer.answer)
      );
    }
    return true;
  });

  // required questions 모두 작성한 경우
  if (isCompleted) {
    return redirect(PATH_SURVEY_PREVIEW_SUBMIT);
  }

  // required questions 모두 작성하지 못한 경우
  return { showRequiredQuestions: true };
}
