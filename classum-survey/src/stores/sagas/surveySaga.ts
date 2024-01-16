import { debounce, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  tryUpdateSurveyTitle,
  tryUpdateSurveyTitleDesc,
  tryUpdateQuestionTitle,
  tryUpdateQuestionOptions,
} from "../actions";
import type { UpdateQuestionActionPayloadType } from "../slices";
import {
  updateSurveyTitle,
  updateSurveyTitleDesc,
  updateQuestionTitle,
  updateQuestionOptions,
} from "@stores";

function* tryUpdateSurveyTitleSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitle(action.payload));
}

function* tryUpdateSurveyTitleDescSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitleDesc(action.payload));
}

function* tryUpdateQuestionTitleSaga(
  action: PayloadAction<UpdateQuestionActionPayloadType<"title">>
) {
  yield put(updateQuestionTitle(action.payload));
}

function* tryUpdateQuestionOptionsSaga(
  action: PayloadAction<UpdateQuestionActionPayloadType<"options">>
) {
  yield put(updateQuestionOptions(action.payload));
}

export function* surveySaga() {
  yield debounce(1000, tryUpdateSurveyTitle, tryUpdateSurveyTitleSaga);
  yield debounce(1000, tryUpdateSurveyTitleDesc, tryUpdateSurveyTitleDescSaga);
  yield debounce(1000, tryUpdateQuestionTitle, tryUpdateQuestionTitleSaga);
  yield debounce(1000, tryUpdateQuestionOptions, tryUpdateQuestionOptionsSaga);
}
