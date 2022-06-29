import { CssBaseline } from "@mui/material";
import { Fragment } from "react";
import InputGlobalStyles from "./GlobalStyles";

export interface Props {
  children: React.ReactNode;
}

const GlobalStylesWrapper = (props: Props) => {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <InputGlobalStyles />
      {props.children}
    </Fragment>
  );
};

export default GlobalStylesWrapper;
