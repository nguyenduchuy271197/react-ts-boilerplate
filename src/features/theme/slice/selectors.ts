import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const selectThemeMode = createSelector(
  [(state: RootState) => state.theme],
  (theme) => theme.selected
);
