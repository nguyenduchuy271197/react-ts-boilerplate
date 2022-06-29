import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as OriginalThemeProvider } from "@mui/material/styles";
import { selectThemeMode } from "./slice/selectors";
import { createTheme } from "@mui/material";
import { getDesignTokens } from "./themes";

const ThemeProvider = (props: { children: JSX.Element }) => {
  const mode = useSelector(selectThemeMode);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};

export default ThemeProvider;
