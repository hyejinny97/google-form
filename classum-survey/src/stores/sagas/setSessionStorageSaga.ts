import { select } from "redux-saga/effects";
import type { RootState } from "@stores";
import { setSessionStorage } from "@utils";

function* setSessionStorageSaga(stateName: keyof RootState) {
  const state: RootState = yield select((state) => state);
  setSessionStorage(stateName, state[stateName]);
}

export { setSessionStorageSaga };
