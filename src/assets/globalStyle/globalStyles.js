import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {	
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
color: #293845;
}
`;

export default GlobalStyle;
