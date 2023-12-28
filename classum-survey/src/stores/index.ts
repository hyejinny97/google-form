export { store } from "./store";
export {
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
  submitSurvey,
  goBackSurvey,
} from "./slices";

export type { RootState } from "./store";
export type { QuestionType, OptionType } from "./slices";
