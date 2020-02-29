import { css } from 'styled-components';

// Fonts
import SFProDisplayRegularWoff from '../assets/fonts/SFProDisplay-Regular.woff';
import SFProDisplayRegularWoff2 from '../assets/fonts/SFProDisplay-Regular.woff2';

export const fontFaces = css`
  @font-face {
    font-family: 'SFProDisplay';
    src: local('SFProDisplay'), local('SFProDisplay'), 
    url(${SFProDisplayRegularWoff2}) format('woff2'),
    url(${SFProDisplayRegularWoff}) format('woff');
    font-weight: var(--regular);
    font-style: normal;
  }
`;

export default fontFaces;