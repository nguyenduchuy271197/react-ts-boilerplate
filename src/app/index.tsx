import { Helmet } from "react-helmet-async";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <AppRoutes />
    </div>
  );
};

export default App;
