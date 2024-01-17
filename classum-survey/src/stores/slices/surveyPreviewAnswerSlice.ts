import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getSessionStorage } from "@utils";

export type AnswerType = string | number | Array<number>; // 차례대로 단답형/장문형, 객관식/드롭다운, 체크박스

interface SurveyPreviewAnswerType {
  questionId: number;
  answer: AnswerType;
}

const initialState: Array<SurveyPreviewAnswerType> = [];

const name = "surveyPreviewAnswer";

export const surveyPreviewAnswerSlice = createSlice({
  name,
  initialState:
    (getSessionStorage(name) as Array<SurveyPreviewAnswerType>) || initialState,
  reducers: {
    updateSurveyPreviewAnswer(
      state,
      action: PayloadAction<SurveyPreviewAnswerType>
    ) {
      const currentQuestion = state.find(
        (question) => question.questionId === action.payload.questionId
      );
      if (currentQuestion) {
        return state.map((question) => {
          if (question.questionId === action.payload.questionId)
            return action.payload;
          return question;
        });
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { updateSurveyPreviewAnswer } = surveyPreviewAnswerSlice.actions;
export default surveyPreviewAnswerSlice.reducer;
