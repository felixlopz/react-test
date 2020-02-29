import React from 'react';
import Container from '../utils/grid';
import { Helmet } from 'react-helmet';


const Page = () => {
    return (
    	<Container>
       	<h1>this is second page </h1>

       	<p>This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description.</p>

				<Helmet>
          <title>Second Page</title>
          <meta name="description" content="This is the description for the second Page"/>
        </Helmet>

    	</Container>
    );
};

export default Page;
