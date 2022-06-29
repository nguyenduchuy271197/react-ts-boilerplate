import { changeTheme } from "@/features/theme/slice";
import { selectThemeKey } from "@/features/theme/slice/selectors";
import { ThemeKeyType } from "@/features/theme/slice/types";
import { saveTheme } from "@/features/theme/utils";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(changeTheme(value));
  };

  return (
    <div>
      <h1>Switch Theme</h1>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            value="light"
            name="theme"
            onChange={(e) => onChange(e)}
            checked={theme === "light"}
          />
          light
        </label>
        <label htmlFor="">
          <input
            type="radio"
            value="dark"
            name="theme"
            onChange={(e) => onChange(e)}
            checked={theme === "dark"}
          />
          dark
        </label>
      </div>
    </div>
  );
};

export default Home;
