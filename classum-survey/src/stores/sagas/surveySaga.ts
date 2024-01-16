import { debounce, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tryUpdateSurveyTitle, tryUpdateSurveyTitleDesc } from "../actions";
import { updateSurveyTitle, updateSurveyTitleDesc } from "@stores";

function* tryUpdateSurveyTitleSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitle(action.payload));
}

function* tryUpdateSurveyTitleDescSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitleDesc(action.payload));
}

export function* surveySaga() {
  yield debounce(1000, tryUpdateSurveyTitle, tryUpdateSurveyTitleSaga);
  yield debounce(1000, tryUpdateSurveyTitleDesc, tryUpdateSurveyTitleDescSaga);
}
