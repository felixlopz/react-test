import React from 'react';


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
      <Header/>    	
			<Router>
				<Home  path="/" />
				<Page  path="/page" />
			</Router>
    </>
  );
}

export default App;
