/**
 * index.tsx
 *
 * This is the entry file for setting up application
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "sanitize.css/sanitize.css";
import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import FontFaceObserver from "fontfaceobserver";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeProvider from "./features/theme/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";

// Initialize languages
// import "./locales/i18n";
import { BrowserRouter } from "react-router-dom";
import GlobalStylesWrapper from "./styles/GlobalStylesWrapper";

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const font = new FontFaceObserver("Inter", {});

// When Inter is loaded, add a font-family using Inter to the body
font.load().then(function () {
  document.body.classList.add("fontLoaded");
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <GlobalStylesWrapper>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </GlobalStylesWrapper>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
