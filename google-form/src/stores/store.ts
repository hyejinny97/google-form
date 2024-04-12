import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import {
  surveyReducer,
  surveySlice,
  isSurveySubmittedReducer,
  isSurveySubmittedSlice,
  surveyPreviewAnswerReducer,
  surveyPreviewAnswerSlice,
} from "./slices";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [surveySlice.name]: surveyReducer,
    [isSurveySubmittedSlice.name]: isSurveySubmittedReducer,
    [surveyPreviewAnswerSlice.name]: surveyPreviewAnswerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
export type RootState = ReturnType<typeof store.getState>;
