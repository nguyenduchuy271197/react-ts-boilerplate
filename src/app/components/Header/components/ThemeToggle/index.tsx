import { changeTheme } from "@/features/theme/slice";
import { selectThemeMode } from "@/features/theme/slice/selectors";
import { saveTheme } from "@/features/theme/utils";
import { FormControlLabel, FormGroup, PaletteMode } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { themeModes } from "@/features/theme/themes";
import { Fragment } from "react";
import ThemeSwitch from "./ThemeSwitch";

const ThemeToggle = () => {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: PaletteMode = e.target.checked
      ? themeModes.dark
      : themeModes.light;
    saveTheme(value);
    dispatch(changeTheme(value));
  };
  return (
    <Fragment>
      <FormGroup>
        <FormControlLabel
          control={
            <ThemeSwitch
              sx={{ m: 1 }}
              checked={mode === themeModes.dark}
              onChange={onChange}
            />
          }
          label="MUI switch"
        />
      </FormGroup>
    </Fragment>
  );
};

export default ThemeToggle;
