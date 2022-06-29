import Home from "@/app/pages/Home";
import NotFound from "@/app/pages/NotFound";

export const routes = [
  { path: "/", element: Home },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
