import { createAction } from "@reduxjs/toolkit";
import { surveySlice } from "../slices";

const stateName = surveySlice.name;

const tryUpdateSurveyTitle = createAction<string>(
  `${stateName}/tryUpdateSurveyTitle`
);

const tryUpdateSurveyTitleDesc = createAction<string>(
  `${stateName}/tryUpdateSurveyTitleDesc`
);

export { tryUpdateSurveyTitle, tryUpdateSurveyTitleDesc };
