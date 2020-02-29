import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styled components theme provider
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';


// Reach router provider
import {
  createHistory,
  LocationProvider
} from "@reach/router";

const history = createHistory(window);


ReactDOM.render(
		<LocationProvider history={history}>
			<ThemeProvider theme={theme}>
				<App />
				<GlobalStyles/>
			</ThemeProvider>
		</LocationProvider> 
		,document.getElementById('root')
);