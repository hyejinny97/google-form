import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionTypes } from "questionTypes";
import { Q_TYPE_MULTIPLE_CHOICE } from "@constants";
import { genRandomNumber } from "@utils";

export type OptionType = {
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

interface InitialStateType {
  surveyTitle: string;
  surveyTitleDesc: string;
  questions: Array<QuestionType>;
}

interface UpdateQuestionActionPayloadType<T> {
  questionId: number;
  data: T extends "title"
    ? string
    : T extends "type"
    ? QuestionTypes
    : T extends "required"
    ? boolean
    : T extends "options"
    ? Array<OptionType>
    : never;
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

const initialState: InitialStateType = {
  surveyTitle: "제목 없는 설문지",
  surveyTitleDesc: "",
  questions: [defaultQuestion],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    updateSurveyTitle(state, action: PayloadAction<string>) {
      state.surveyTitle = action.payload;
    },
    updateSurveyTitleDesc(state, action: PayloadAction<string>) {
      state.surveyTitleDesc = action.payload;
    },
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
    duplicateQuestion(state, action: PayloadAction<number>) {
      const currentQuestionIdx = state.questions.findIndex(
        (question) => question.id === action.payload
      );
      state.questions.splice(currentQuestionIdx + 1, 0, {
        ...state.questions[currentQuestionIdx],
        id: genRandomNumber(),
      });
    },
    updateQuestionTitle(
      state,
      action: PayloadAction<UpdateQuestionActionPayloadType<"title">>
    ) {
      const newQuestions = state.questions.map((question) => {
        if (question.id === action.payload.questionId) {
          question.title = action.payload.data;
        }
        return question;
      });
      state.questions = newQuestions;
    },
    updateQuestionType(
      state,
      action: PayloadAction<UpdateQuestionActionPayloadType<"type">>
    ) {
      const newQuestions = state.questions.map((question) => {
        if (question.id === action.payload.questionId) {
          question.type = action.payload.data;
        }
        return question;
      });
      state.questions = newQuestions;
    },
    updateQuestionRequired(
      state,
      action: PayloadAction<UpdateQuestionActionPayloadType<"required">>
    ) {
      const newQuestions = state.questions.map((question) => {
        if (question.id === action.payload.questionId) {
          question.required = action.payload.data;
        }
        return question;
      });
      state.questions = newQuestions;
    },
    updateQuestionOptions(
      state,
      action: PayloadAction<UpdateQuestionActionPayloadType<"options">>
    ) {
      const newQuestions = state.questions.map((question) => {
        if (question.id === action.payload.questionId) {
          question.options = action.payload.data;
        }
        return question;
      });
      state.questions = newQuestions;
    },
  },
});

export const {
  updateSurveyTitle,
  updateSurveyTitleDesc,
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} = surveySlice.actions;
export default surveySlice.reducer;
