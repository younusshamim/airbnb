import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Details from "../pages/details/Details";
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
