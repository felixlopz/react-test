import styled from 'styled-components';

export const Container = styled.div`
	padding: 0  2em;
	
	@media ${props => props.theme.mediaQueries.land}{
		 max-width: 600px;
		 margin: 0 auto;
		 padding: 0;
	}
	@media ${props => props.theme.mediaQueries.desktop}{
		 width: 80%; 	
		 max-width: 1340px;
	}
`
export default Container;