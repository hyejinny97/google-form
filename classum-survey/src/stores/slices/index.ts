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
  reorderQuestions,
} from "./surveySlice";

export {
  default as isSurveySubmittedReducer,
  isSurveySubmittedSlice,
  submitSurvey,
  goBackSurvey,
} from "./isSurveySubmittedSlice";

export type { QuestionType, OptionType } from "./surveySlice";
