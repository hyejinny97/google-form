export { store } from "./store";
export {
  addQuestion,
  deleteQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "./slices";
export type { QuestionType, OptionType } from "./slices";

export type { RootState } from "./store";
