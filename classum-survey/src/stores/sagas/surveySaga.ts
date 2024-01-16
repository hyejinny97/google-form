import { debounce, put, call, takeEvery } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  tryUpdateSurveyTitle,
  tryUpdateSurveyTitleDesc,
  tryUpdateQuestionTitle,
  tryUpdateQuestionOptions,
} from "../actions";
import { surveySlice } from "../slices";
import type { UpdateQuestionActionPayloadType } from "../slices";
import {
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
} from "@stores";
import { setSessionStorageSaga } from "./setSessionStorageSaga";

const stateName = surveySlice.name;

function* tryUpdateSurveyTitleSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitle(action.payload));
  yield call(setSessionStorageSaga, stateName);
}

function* tryUpdateSurveyTitleDescSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitleDesc(action.payload));
  yield call(setSessionStorageSaga, stateName);
}

function* tryUpdateQuestionTitleSaga(
  action: PayloadAction<UpdateQuestionActionPayloadType<"title">>
) {
  yield put(updateQuestionTitle(action.payload));
  yield call(setSessionStorageSaga, stateName);
}

function* tryUpdateQuestionOptionsSaga(
  action: PayloadAction<UpdateQuestionActionPayloadType<"options">>
) {
  yield put(updateQuestionOptions(action.payload));
  yield call(setSessionStorageSaga, stateName);
}

export function* surveySaga() {
  yield debounce(1000, tryUpdateSurveyTitle, tryUpdateSurveyTitleSaga);
  yield debounce(1000, tryUpdateSurveyTitleDesc, tryUpdateSurveyTitleDescSaga);
  yield debounce(1000, tryUpdateQuestionTitle, tryUpdateQuestionTitleSaga);
  yield debounce(1000, tryUpdateQuestionOptions, tryUpdateQuestionOptionsSaga);
  yield takeEvery(addQuestion, setSessionStorageSaga, stateName);
  yield takeEvery(deleteQuestion, setSessionStorageSaga, stateName);
  yield takeEvery(duplicateQuestion, setSessionStorageSaga, stateName);
  yield takeEvery(updateQuestionType, setSessionStorageSaga, stateName);
  yield takeEvery(updateQuestionRequired, setSessionStorageSaga, stateName);
  yield takeEvery(reorderQuestions, setSessionStorageSaga, stateName);
}
