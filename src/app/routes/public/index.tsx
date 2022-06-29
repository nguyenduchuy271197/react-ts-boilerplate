import { Outlet } from "react-router-dom";
import { default as publicRoutes } from "./routes";

const PublicRoute = () => {
  return <Outlet />;
};


export { publicRoutes };
export default PublicRoute;
