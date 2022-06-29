import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { selectTheme } from "./slice/selectors";

const ThemeProvider = (props: { children: JSX.Element }) => {
  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};

export default ThemeProvider;
