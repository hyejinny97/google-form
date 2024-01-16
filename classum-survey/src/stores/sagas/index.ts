import { all } from "redux-saga/effects";
import { surveySaga } from "./surveySaga";

export function* rootSaga() {
  yield all([surveySaga()]);
}
