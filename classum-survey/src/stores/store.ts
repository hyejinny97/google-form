import { configureStore } from "@reduxjs/toolkit";
import {
  surveyReducer,
  surveySlice,
  isSurveySubmittedReducer,
  isSurveySubmittedSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    [surveySlice.name]: surveyReducer,
    [isSurveySubmittedSlice.name]: isSurveySubmittedReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
