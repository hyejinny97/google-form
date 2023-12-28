import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { SurveyEditPage, SurveyPreviewPage } from "@pages";
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
        loader: () => redirect("survey/edit"),
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
            element: <div>프리뷰</div>,
          },
          {
            path: PATH_SURVEY_PREVIEW_SUBMIT,
            element: <div>서브밋</div>,
          },
        ],
      },
    ],
  },
]);

export { router };
