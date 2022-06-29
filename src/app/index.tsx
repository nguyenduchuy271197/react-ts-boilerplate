import { Helmet } from "react-helmet-async";
import GlobalStylesWrapper from "./components/GlobalStyles";
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
      <GlobalStylesWrapper>
        <AppRoutes />
      </GlobalStylesWrapper>
    </div>
  );
};

export default App;
