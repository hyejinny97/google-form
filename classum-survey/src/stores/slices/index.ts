export {
  default as surveyReducer,
  surveySlice,
  addQuestion,
  deleteQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "./surveySlice";

export type { QuestionType, OptionType } from "./surveySlice";
