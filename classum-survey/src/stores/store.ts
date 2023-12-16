import { configureStore } from "@reduxjs/toolkit";
import { surveyReducer, surveySlice } from "./slices";

const store = configureStore({
  reducer: {
    [surveySlice.name]: surveyReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
