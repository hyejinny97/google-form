import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { SurveyEditPage, SurveyPreviewPage, SurveySubmitPage } from "@pages";
import {
  PATH_SURVEY_EDIT,
  PATH_SURVEY_PREVIEW,
  PATH_SURVEY_SUBMIT,
} from "@constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => redirect("survey/edit"),
      },
      {
        path: PATH_SURVEY_EDIT,
        element: <SurveyEditPage />,
      },
      {
        path: PATH_SURVEY_PREVIEW,
        element: <SurveyPreviewPage />,
      },
      {
        path: PATH_SURVEY_SUBMIT,
        element: <SurveySubmitPage />,
      },
    ],
  },
]);

export { router };
