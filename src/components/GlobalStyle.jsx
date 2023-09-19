import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}

body {
  margin: 0;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul,
ol {
  display: flex;
  justify-content: center;

    list-style: none;
    padding-left: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
  }
`;
