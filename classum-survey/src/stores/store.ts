import { configureStore } from "@reduxjs/toolkit";
import {
  surveyReducer,
  surveySlice,
  isSurveySubmittedReducer,
  isSurveySubmittedSlice,
  surveyPreviewAnswerReducer,
  surveyPreviewAnswerSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    [surveySlice.name]: surveyReducer,
    [isSurveySubmittedSlice.name]: isSurveySubmittedReducer,
    [surveyPreviewAnswerSlice.name]: surveyPreviewAnswerReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
