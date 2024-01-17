import { takeEvery } from "redux-saga/effects";
import { setSessionStorageSaga } from "./setSessionStorageSaga";
import { surveyPreviewAnswerSlice } from "../slices";
import { updateSurveyPreviewAnswer } from "@stores";

const stateName = surveyPreviewAnswerSlice.name;

function* surveyPreviewAnswerSaga() {
  yield takeEvery(updateSurveyPreviewAnswer, setSessionStorageSaga, stateName);
}

export { surveyPreviewAnswerSaga };
