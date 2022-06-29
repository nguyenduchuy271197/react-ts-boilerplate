import { PaletteMode } from "@mui/material";

export function saveTheme(theme: PaletteMode) {
  window.localStorage && localStorage.setItem("selectedTheme", theme);
}

export function getThemeFromStorage(): PaletteMode | null {
  return window.localStorage
    ? (localStorage.getItem("selectedTheme") as PaletteMode) || null
    : null;
}
