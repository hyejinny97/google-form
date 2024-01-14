import { createSlice } from "@reduxjs/toolkit";

export const isSurveySubmittedSlice = createSlice({
  name: "isSurveySubmitted",
  initialState: false,
  reducers: {
    submitSurvey() {
      return true;
    },
    goBackSurvey() {
      return false;
    },
  },
});

export const { submitSurvey, goBackSurvey } = isSurveySubmittedSlice.actions;
export default isSurveySubmittedSlice.reducer;
