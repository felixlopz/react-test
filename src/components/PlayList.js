import React from 'react';
import styled from 'styled-components';

// Components
import Song from './Song';

// Fetching songs from API js file on source folder
import songs from '../API';

// Styled Components
const Wrapper = styled.ul`
		
		@media ${props => props.theme.mediaQueries.desktop}{
			max-width: 600px;
		}


`


const PlayList = () => {
    return (
			<Wrapper>
				{ 
					songs.map(song => {
						return <Song key={song.name } song={song} />
					})
				}
			</Wrapper>        
    );
};



export default PlayList;
