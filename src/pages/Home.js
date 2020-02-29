import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Grid
import { Container } from '../utils/grid';


// components
import PlayList from '../components/PlayList';



const Wrapper = styled.section`
	
	
`

const Heading = styled.div`
	border-bottom: 1px solid #F5F5F5;
	padding: 1.5em 3em;
	text-align: center;

   @media ${props => props.theme.mediaQueries.desktop}{
    text-align: left;
    padding: 4.5rem 0;
    border: none;
  }

`

const PageTitle = styled.h1`
	font-weight: 600;
	font-size: 1.4923rem;
	color: var(--color-secondary);

  @media ${props => props.theme.mediaQueries.desktop}{
    font-size: 2.9rem;
    line-height: 35px;
  }


`


const Home = () => {
  return (
  	<Wrapper>
  		<Heading>
  			<Container>
  				<PageTitle>
  					PlayLists
  				</PageTitle>
  			</Container>
  		</Heading>
  		<Container>
  			<PlayList />
  			<Helmet>
          <title>Paylist Page</title>
          <meta name="description" content="This is the description for the home page"/>
        </Helmet>
  		</Container>
  	</Wrapper>  
  );
};



export default Home;

