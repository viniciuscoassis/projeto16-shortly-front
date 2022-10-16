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

//utilities

.u-green-box{
  box-shadow: 0 0.2rem 0.4rem 0.3rem rgba(120, 177, 89, 0.15);
  margin: 0 auto;
border-radius: 3px;
}
.u-margin-bottom-small{
  margin-bottom: 1rem;
}
.u-margin-bottom-medium{
  margin-bottom: 4rem;
}
.u-margin-bottom-large{
  margin-bottom: 7rem;
}
/* .u-button-green{
width: ;
} */
`;

export default GlobalStyle;
