import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getThemeFromStorage } from "../utils";
import { PaletteMode } from "@mui/material";
import { ThemeState } from "./types";


export const initialState: ThemeState = {
  selected: getThemeFromStorage() || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
