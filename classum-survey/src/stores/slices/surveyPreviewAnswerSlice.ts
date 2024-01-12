import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AnswerType = string | number | Array<number>; // 차례대로 단답형/장문형, 객관식/드롭다운, 체크박스

interface SurveyPreviewAnswerType {
  questionId: number;
  answer: AnswerType;
}

const initialState: Array<SurveyPreviewAnswerType> = [];

export const surveyPreviewAnswerSlice = createSlice({
  name: "surveyPreviewAnswer",
  initialState,
  reducers: {
    updateSurveyPreviewAnswer(
      state,
      action: PayloadAction<SurveyPreviewAnswerType>
    ) {
      const idx = state.findIndex(
        (question) => question.questionId === action.payload.questionId
      );
      if (idx > 0) {
        state[idx] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { updateSurveyPreviewAnswer } = surveyPreviewAnswerSlice.actions;
export default surveyPreviewAnswerSlice.reducer;
