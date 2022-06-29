/**
 * Set a font-family for all your typography
 * Set the background color on every page
 * Override some browser default styling
 */
// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//     html, body {
//         height: 100%;
//         width: 100%;
//         line-height: 1.5;
//     }

//     body {
//         font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//     }

//     body.fontLoaded {
//     font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   }
//   a {
//       text-decoration: none;
//       color: inherit;
//   }

//   p,
//   label {
//     line-height: 1.5em;
//   }
//   input, select, button {
//     font-family: inherit;
//     font-size: inherit;
//   }
//   .icon {
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;
import GlobalStyles from "@mui/material/GlobalStyles";

const InputGlobalStyles = () => {
  return (
    <GlobalStyles
      styles={{
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    />
  );
};

export default InputGlobalStyles;
