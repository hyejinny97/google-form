import { all } from "redux-saga/effects";
import { surveySaga } from "./surveySaga";
import { surveyPreviewAnswerSaga } from "./surveyPreviewAnswerSaga";

export function* rootSaga() {
  yield all([surveySaga(), surveyPreviewAnswerSaga()]);
}
