export { store } from "./store";
export {
  // surveySlice의 actions
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
  reorderQuestions,
  // isSurveySubmittedSlice의 actions
  submitSurvey,
  goBackSurvey,
  // surveyPreviewAnswerSlice의 actions
  updateSurveyPreviewAnswer,
} from "./slices";

export type { RootState } from "./store";
export type { QuestionType, OptionType, AnswerType } from "./slices";
