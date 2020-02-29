import { createGlobalStyle } from 'styled-components';
import fontFaces from './fonts';

export default createGlobalStyle`

    /* Intializing FontFaces */
    ${fontFaces}

    * {
      margin: 0;
      padding: 0;
    }


    button {
      outline: none;
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
    	/* 1rem = 10px */
      font-size: 62.5%; 
      box-sizing: border-box;
      --color-primary: ${props => props.theme.colors.primary};
      --color-secondary: ${props => props.theme.colors.secondary};
      --color-description: ${props => props.theme.colors.description};
      --color-label: ${props => props.theme.colors.label};
      --color-bar: ${props => props.theme.colors.bar};
      --color-progress: ${props => props.theme.colors.progress};
      --color-grey: ${props => props.theme.colors.grey};
      --color-separator: ${props => props.theme.colors.separator};
      --color-black: ${props => props.theme.colors.black};
      --color-white: ${props => props.theme.colors.white};
      --regular: ${props => props.theme.fonts.weight.regular};
      --light: ${props => props.theme.fonts.weight.light};
    }

	  a{
      text-decoration: none;
    }

    body {
      font-family: 'SFProDisplay';
      font-weight: 400;
    }
`;