import {
  createBrowserRouter,
} from "react-router-dom"
import DashboardMain from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardMain />,
  },
]);