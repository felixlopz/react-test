import React from 'react';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Home from './pages/Home'
import Page from './pages/Page'

// Layout
import Header from './layout/Header'

function App() {
  return (
    <>
			<Router>
				<Header/>
				<Switch>
	    		<Route path="/inner-page">
	    			<Page/>
	    		</Route>
	    		<Route path="/">
	    			<Home/>
	    		</Route>
    		</Switch>
			</Router>
    	
    </>
  );
}

export default App;
