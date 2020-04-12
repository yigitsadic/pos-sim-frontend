import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import 'normalize.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.bg_primary};
    font-size: 16px;
  }
`;

const theme = {
  text_primary: '#b6b6b6',
  text_secondary: '#ececec',
  bg_primary: '#f5eb95',
  bg_secondary: '#141418'
};

ReactDOM.render(<ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider>, document.getElementById('app'));
