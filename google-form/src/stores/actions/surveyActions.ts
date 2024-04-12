import { createAction } from "@reduxjs/toolkit";
import { surveySlice } from "../slices";
import type { UpdateQuestionActionPayloadType } from "../slices";

const stateName = surveySlice.name;

const tryUpdateSurveyTitle = createAction<string>(
  `${stateName}/tryUpdateSurveyTitle`
);

const tryUpdateSurveyTitleDesc = createAction<string>(
  `${stateName}/tryUpdateSurveyTitleDesc`
);

const tryUpdateQuestionTitle = createAction<
  UpdateQuestionActionPayloadType<"title">
>(`${stateName}/tryUpdateQuestionTitle`);

const tryUpdateQuestionOptions = createAction<
  UpdateQuestionActionPayloadType<"options">
>(`${stateName}/tryUpdateQuestionOptions`);

export {
  tryUpdateSurveyTitle,
  tryUpdateSurveyTitleDesc,
  tryUpdateQuestionTitle,
  tryUpdateQuestionOptions,
};
