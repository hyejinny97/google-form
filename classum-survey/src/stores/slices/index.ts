export {
  default as surveyReducer,
  surveySlice,
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "./surveySlice";

export type { QuestionType, OptionType } from "./surveySlice";
