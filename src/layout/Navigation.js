import React, { useState } from 'react';
import styled from 'styled-components';
import { useMatch  } from '@reach/router';

// Importing Icons
import  RefreshIcon from '../assets/icons/refresh.png';
import  MicIcon from '../assets/icons/mic.png';
import  HeadphonesIcon from '../assets/icons/headphones-2.png';
import  ProfileIcon from '../assets/icons/profile.png';


const NavWrapper = styled.nav`

	position: relative;
	overflow: ${props => props.isOpen ? 'none' : 'hidden' };

	@media ${props => props.theme.mediaQueries.desktop}{
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}	
`;

const MenuButton = styled.button`
	color: var(--color-white);
	font-size: 1.3rem;
	padding: 0.3em 0.5em;
	border: none;
	outline: none;
	background: var(--color-description);
	border: 2px solid var(--color-secondary);
	border-radius: 56px;	
	
	@media ${props => props.theme.mediaQueries.desktop}{
		display: none;
	}
`

const Nav = styled.ul`

	position: absolute;
	background: var(--color-primary);
	top: calc( 1em + 100%);
	left: -50px;
	right: -50px;
	z-index: 999;

	@media ${props => props.theme.mediaQueries.desktop}{
		display: flex;
		position: static;
		width: 60%;
		justify-content: space-between;
		align-items: center;
	}
`

const LinkItem = styled.a.attrs({ target: '_blank' })`

	 display: flex;
	 align-items: center;
	 font-size: 15px;
	 line-height: 18px;
	 letter-spacing: 0.199196px;
	 padding: 0.5rem 1rem;
	 background: var(--color-primary);

	@media ${props => props.theme.mediaQueries.desktop}{
		
		cursor: pointer;
		color: var(--color-progress);
		flex-direction: column;
		transition: transform 0.2s ease-in;
		&:hover{
			transform: translateY(3px);
		}
	}
`;

const Icon = styled.img`
	
	display: none;

	@media ${props => props.theme.mediaQueries.desktop}{
		display: block;
		object-fit: contain;
		margin-bottom: 0.5rem;
	}
`

const Navigation = () => {

	const [isOpen, setIsOpen] = useState(false);
	const isMatch = useMatch('/page');

  return (
      <NavWrapper isOpen={isOpen}>
      	<Nav>
      		<LinkItem href={!isMatch ? 'https://google.com' : 'https://facebook.com'}>
      			<Icon src={RefreshIcon}/>
      			refresh
      		</LinkItem>
      		<LinkItem href={!isMatch ? 'https://yahoo.com' : 'https://instagram.com'}>
      			<Icon src={MicIcon}/>
      			discover
      		</LinkItem>
      		<LinkItem href={!isMatch ? 'https://amazon.com' : 'https://twitter.com'}>
      			<Icon src={HeadphonesIcon}/>
      			notifications
      		</LinkItem>
      		<LinkItem>
      			<Icon src={ProfileIcon}/>
      			username
      		</LinkItem>
      	</Nav>
      	<MenuButton onClick={ () => { setIsOpen(!isOpen) }}>
      		Menu
      	</MenuButton>
      </NavWrapper>
  );
};

export default Navigation;
