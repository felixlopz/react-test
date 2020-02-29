import React  from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// Grid
import  { Container }  from '../utils/grid';

// Layout
import Navigation from './Navigation';

// Styled Components
const Wrapper = styled.header`
	background-color: var(--color-primary);


  @media ${props => props.theme.mediaQueries.desktop}{

  }

	padding-top: 1em;
	padding-bottom: 1em;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
 @media ${props => props.theme.mediaQueries.desktop}{
    
  }
`

const Logo = styled.h2`
  font-size: 14.5714px;
  line-height: 1.8rem;
  color: var(--color-secondary);
`

const Header = ( ) => {
  return (
  	<Wrapper>
      <Container>
        <HeaderWrapper>
          <Link to="/inner-page">
            <Logo>   
              jifcast
            </Logo>
           </Link>
          <Navigation/>
        </HeaderWrapper>
      </Container>
  	</Wrapper>
  );
};



export default Header;
