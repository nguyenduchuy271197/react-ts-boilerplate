import { Fragment } from "react";
import GlobalStyles from "./global.styled";

export interface Props {
  children: React.ReactNode;
}

const GlobalStylesWrapper = (props: Props) => {
  return (
    <Fragment>
      <GlobalStyles />
      {props.children}
    </Fragment>
  );
};

export default GlobalStylesWrapper;
