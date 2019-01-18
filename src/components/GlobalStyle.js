import { createGlobalStyle } from "styled-components";

const sizes = {
  huge: 1440,
  gaint: 1172,
  desktop: 1080,
  tablet: 768,
  phone: 376
};

// red: "gold",
// redopa: "#f9e684",
const theme = {
  gold: "gold",
  goldbg: "#fff9d9",
  goldopa: "#f9e684",
  golddark: "#d5ad18",
  alinks: "#00f",
  white: "#fff",
  whiteHover: "#ececec42",
  whiteoff: "#f9f9f9",
  black: "#000",
  black2: "#2d2d2d",
  blackhover: "#2a2a2a",
  borderlight: "#bebebe",
  cardbg: "#a5a5a5",
  purpleDark: "#4527a0",
  purpleLight: "#9575cd",
  flowerBlueDark: "#263c63",
  darkModeBlack1: "#1a1a1a",
  darkModeBorder: "#313131"
};
// DARK MODE
const GlobalDark = createGlobalStyle`
html,html *{
  color: #eeeeee !important;
  background-color: ${theme.darkModeBlack1} !important;
box-sizing:border-box;
}
*,*:before, *:after{
  box-sizing:border-box;
  
}
/* dev type */
.P_Type{
  color:${theme.gold}!important
}
body {
/* img and videos */
img, video {z-index: 1}
/* borders */
* {border-color: ${theme.darkModeBorder} !important;
  box-shadow:none!important;}
cite, cite * {color: #029833 !important}
:link, :link * {color: #8db2e5 !important}
input, textarea {background-color: #333333 !important}
  a {color:${theme.gold}!important;
    background-color: rgba(255, 255, 255, 0.01) !important}
:visited, :visited * {color: gold !important}
html, body, input, select, button {background-image: none !important}

video {
  background-color: transparent !important;
}
    transition: all 200ms ease-in-out;
  min-width: 360px;
  background:${theme.whiteoff};
  box-sizing: border-box;
   /* overflow-x: hidden; */
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size:16px

}

.App2 {
  /* //Universal Wrapper
  this is main wrapper around whole app */
  display: grid;
  /* grid-template-columns: 2% 2fr 2%; */
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  background-color: inherit;
  text-align: center;
  position: relative;
  margin: 0 auto;
 
}
`;

const GlobalStyle = createGlobalStyle`
html{
box-sizing:border-box;
}
*,*:before, *:after{
  box-sizing:border-box;
  
}
body {  transition: all 200ms ease-in-out;
  min-width: 360px;
  background:${theme.whiteoff};
  box-sizing: border-box;
   /* overflow-x: hidden; */
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size:16px

}

.App2 {
  /* //Universal Wrapper
  this is main wrapper around whole app */
  display: grid;
  /* grid-template-columns: 2% 2fr 2%; */
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  background-color: inherit;
  text-align: center;
  position: relative;
  margin: 0 auto;
 
}
`;

export { sizes, theme, GlobalStyle, GlobalDark };
