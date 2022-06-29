import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import WithSidebarLayout from "../layouts/WithSidebarLayout";
import ProtectedRoute, { protectedRoutes } from "./private";
import PublicRoute, { publicRoutes } from "./public";

interface RouteTypes {
  path: string;
  element: () => JSX.Element;
  layout?: null | string;
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        {publicRoutes.map(
          ({ path, element: Component, layout }: RouteTypes) => {
            const Layout =
              layout === "WITH_SIDEBAR" ? WithSidebarLayout : DefaultLayout;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          }
        )}
      </Route>

      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map(
          ({ path, element: Component, layout }: RouteTypes) => {
            const Layout =
              layout === "WITH_SIDEBAR" ? WithSidebarLayout : DefaultLayout;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          }
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
