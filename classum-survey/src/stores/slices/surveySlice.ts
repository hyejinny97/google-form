import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionTypes } from "questionTypes";
import { Q_TYPE_MULTIPLE_CHOICE } from "@constants";
import { genRandomNumber } from "@utils";

type OptionType = {
  order: number;
  option: string;
};

export interface QuestionType {
  id: number;
  title: string;
  type: QuestionTypes;
  required: boolean;
  options?: Array<OptionType>;
}

interface InitialStateTypes {
  surveyTitle: string;
  surveyTitleDesc: string;
  questions: Array<QuestionType>;
}

const defaultQuestion: QuestionType = {
  id: 1,
  title: "",
  type: Q_TYPE_MULTIPLE_CHOICE,
  required: false,
  options: [
    {
      order: 1,
      option: "옵션 1",
    },
  ],
};

const initialState: InitialStateTypes = {
  surveyTitle: "제목 없는 설문지",
  surveyTitleDesc: "",
  questions: [defaultQuestion],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addQuestion(state) {
      const newQuestion = { ...defaultQuestion, id: genRandomNumber() };
      state.questions.push(newQuestion);
    },
    deleteQuestion(state, action: PayloadAction<number>) {
      const newQuestions = state.questions.filter(
        (question) => question.id !== action.payload
      );
      state.questions = newQuestions;
    },
  },
});

export const { addQuestion, deleteQuestion } = surveySlice.actions;
export default surveySlice.reducer;
