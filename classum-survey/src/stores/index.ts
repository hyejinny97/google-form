export { store } from "./store";
export {
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "./slices";

export type { RootState } from "./store";
export type { QuestionType, OptionType } from "./slices";
