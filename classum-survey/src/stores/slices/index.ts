export {
  default as surveyReducer,
  surveySlice,
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "./surveySlice";

export type { QuestionType, OptionType } from "./surveySlice";
