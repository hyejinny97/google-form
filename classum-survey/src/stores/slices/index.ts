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

export {
  default as surveyPreviewAnswerReducer,
  surveyPreviewAnswerSlice,
  updateSurveyPreviewAnswer,
} from "./surveyPreviewAnswerSlice";

export type {
  QuestionType,
  OptionType,
  UpdateQuestionActionPayloadType,
} from "./surveySlice";
export type { AnswerType } from "./surveyPreviewAnswerSlice";
