import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";

import { lazy } from "react";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/HomeTemplate/HomePage")),
  },

  {
    exact: false,
    path: "/about",
    component: lazy(() => import("../containers/HomeTemplate/AboutPage")),
  },

  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("../containers/HomeTemplate/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("../containers/HomeTemplate/DetailMoviePage")),
  },
  {
    exact: false,
    path: "/checkout/:id",
    component: lazy(() => import("../containers/HomeTemplate/CheckoutPage")),
  },
  {
    exact: false,
    path: "/hoc",
    component: lazy(() => import("../containers/HomeTemplate/HocPage")),
  },
  {
    exact: false,
    path: "/render-props",
    component: lazy(() => import("../containers/HomeTemplate/RenderPropsPage")),
  },
  {
    exact: false,
    path: "/hooks",
    component: lazy(() => import("../containers/HomeTemplate/HooksPage")),
  },
];

const routesAdmin = [
  // localhost:3000/dashboard
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../containers/AdminTemplate/DashboardPage")),
  },
  // localhost:3000/add-user
  {
    exact: false,
    path: "/add-user",
    component: lazy(() => import("../containers/AdminTemplate/AddUser")),
  },
  {
    exact: false,
    path: "/authpage",
    component: lazy(() => import("../containers/AdminTemplate/AuthPage")),
  },
  {
    exact: false,
    path: "/film",
    component: lazy(() => import("../containers/AdminTemplate/Film")),
  },
  {
    exact: false,
    path: "/films/addnewfilm",
    component: lazy(() =>
      import("../containers/AdminTemplate/Film/AddNewFilm")
    ),
  },
  {
    exact: false,
    path: "/films/editfilm/:id",
    component: lazy(() => import("../containers/AdminTemplate/Film/EditFilm")),
  },
  {
    exact: false,
    path: "/films/showtime/:id",
    component: lazy(() => import("../containers/AdminTemplate/Film/ShowTime")),
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      ></HomeTemplate>
    );
  });
}

function renderRoutesAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      ></AdminTemplate>
    );
  });
}

export { renderRoutesHome, renderRoutesAdmin };
