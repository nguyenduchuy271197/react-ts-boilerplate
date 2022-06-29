import { CssBaseline } from "@mui/material";
import { Fragment } from "react";

export interface Props {
  children: React.ReactNode;
}

const GlobalStylesWrapper = (props: Props) => {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      {props.children}
    </Fragment>
  );
};

export default GlobalStylesWrapper;
