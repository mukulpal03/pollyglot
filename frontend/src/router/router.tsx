import { createBrowserRouter } from "react-router";
import { Translate } from "../pages/Translate";
import { Results } from "../pages/Results";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <Translate /> },
  { path: "/results", element: <Results /> },
  { path: "*", element: <Navigate to="/" /> },
]);
