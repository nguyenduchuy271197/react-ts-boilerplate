import { Outlet, Navigate } from "react-router-dom";
import { default as protectedRoutes } from "./routes";
const ProtectedRoute = () => {
  const auth = {
    loggedin: false,
  };
  return auth.loggedin ? <Outlet /> : <Navigate to="/" replace />;
};

export { protectedRoutes };
export default ProtectedRoute;
