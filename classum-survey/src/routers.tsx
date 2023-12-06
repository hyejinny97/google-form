import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { SurveyEditPage, SurveyPreviewPage, SurveySubmitPage } from "@pages";

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
        path: "survey/edit",
        element: <SurveyEditPage />,
      },
      {
        path: "survey/preview",
        element: <SurveyPreviewPage />,
      },
      {
        path: "survey/submit",
        element: <SurveySubmitPage />,
      },
    ],
  },
]);

export { router };
