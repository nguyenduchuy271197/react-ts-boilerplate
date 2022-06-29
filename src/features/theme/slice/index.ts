import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ThemeKeyType, ThemeState } from "./types";
import { getThemeFromStorage } from "../utils";

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || "system",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeKeyType>) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
