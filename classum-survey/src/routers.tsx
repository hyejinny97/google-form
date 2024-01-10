import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import {
  SurveyEditPage,
  SurveyPreviewPage,
  SurveyPreviewFooter,
  SurveySubmitFooter,
} from "@pages";
import {
  PATH_SURVEY_EDIT,
  PATH_SURVEY_PREVIEW,
  PATH_SURVEY_PREVIEW_SUBMIT,
} from "@constants";

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
        element: <SurveyPreviewPage />,
        children: [
          {
            index: true,
            element: <SurveyPreviewFooter />,
          },
          {
            path: PATH_SURVEY_PREVIEW_SUBMIT,
            element: <SurveySubmitFooter />,
          },
        ],
      },
    ],
  },
]);

export { router };
