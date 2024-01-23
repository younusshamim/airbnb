import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import Main from "../layout/Main";

const RoutesList = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

export default RoutesList;
