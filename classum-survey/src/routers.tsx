import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import {
  SurveyEditPage,
  SurveyPreviewPage,
  SurveyPreviewFooter,
  SurveySubmitFooter,
  surveyPreviewPageAction,
} from "@pages";
import {
  PATH_SURVEY_EDIT,
  PATH_SURVEY_PREVIEW,
  PATH_SURVEY_PREVIEW_SUBMIT,
} from "@constants";
import { store, submitSurvey, goBackSurvey } from "@stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => redirect(PATH_SURVEY_EDIT),
      },
      {
        path: PATH_SURVEY_EDIT,
        element: <SurveyEditPage />,
      },
      {
        path: PATH_SURVEY_PREVIEW,
        action: surveyPreviewPageAction,
        element: <SurveyPreviewPage />,
        children: [
          {
            index: true,
            loader: () => store.dispatch(goBackSurvey()),
            element: <SurveyPreviewFooter />,
          },
          {
            path: PATH_SURVEY_PREVIEW_SUBMIT,
            loader: () => store.dispatch(submitSurvey()),
            element: <SurveySubmitFooter />,
          },
        ],
      },
    ],
  },
]);

export { router };
