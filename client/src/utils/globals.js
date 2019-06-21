import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursort: pointer;
  }

  a, 
  a:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Comfortaa', cursive;
    font-weight: 400;
    line-height: 1.6;
    user-select: none;
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  ::-webkit-scrollbar { width: 3px; height: 3px;}
  ::-webkit-scrollbar-track {  background-color: ${props => props.theme.colors.dark};}
  ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: ${props => props.theme.colors.dark}; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: ${props => props.theme.colors.dark};}
  ::-webkit-resizer { background-color: ${props => props.theme.colors.dark};}
`;