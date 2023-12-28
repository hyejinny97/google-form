import { createSlice } from "@reduxjs/toolkit";
import { PATH_SURVEY_PREVIEW_SUBMIT } from "@constants";

export const isSurveySubmittedSlice = createSlice({
  name: "isSurveySubmitted",
  initialState: location.pathname === PATH_SURVEY_PREVIEW_SUBMIT,
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
