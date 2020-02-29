import React from 'react';
import { Helmet } from 'react-helmet'


// Router
import { Router } from '@reach/router';

// Pages
import Home from './pages/Home.js'
import Page from './pages/Page.js'

// Layout
import Header from './layout/Header.js'

function App() {
  return (
    <>
			<Helmet>
		    <title>This is the Landing page</title>
		    <meta name="description" content="This is the content from my website" />
		  </Helmet>

      <Header/>    	
			<Router>
				<Home  path="/" />
				<Page  path="/page" />
			</Router>
    </>
  );
}

export default App;
