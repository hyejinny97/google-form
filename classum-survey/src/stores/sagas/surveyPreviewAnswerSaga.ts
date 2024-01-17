import { takeEvery } from "redux-saga/effects";
import { setSessionStorageSaga } from "./setSessionStorageSaga";
import { deleteSessionStorageSaga } from "./deleteSessionStorageSaga";
import { surveyPreviewAnswerSlice } from "../slices";
import { updateSurveyPreviewAnswer, clearSurveyPreviewAnswer } from "@stores";

const stateName = surveyPreviewAnswerSlice.name;

function* surveyPreviewAnswerSaga() {
  yield takeEvery(updateSurveyPreviewAnswer, setSessionStorageSaga, stateName);
  yield takeEvery(
    clearSurveyPreviewAnswer,
    deleteSessionStorageSaga,
    stateName
  );
}

export { surveyPreviewAnswerSaga };
