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
  clearSurveyPreviewAnswer,
} from "./slices";
export {
  tryUpdateSurveyTitle,
  tryUpdateSurveyTitleDesc,
  tryUpdateQuestionTitle,
  tryUpdateQuestionOptions,
} from "./actions";

export type { RootState } from "./store";
export type { QuestionType, OptionType, AnswerType } from "./slices";
