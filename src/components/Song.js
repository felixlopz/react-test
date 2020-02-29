import React from 'react';
import styled from 'styled-components';

// Importing Icons
import  HeartIcon from '../assets/icons/heart.png';
import  CloudIcon from '../assets/icons/cloud.png';
import  HeadphonesIcon from '../assets/icons/headphones.png';
import  PlayIcon from '../assets/icons/play.png';


// Styled components
const Wrapper = styled.article`
	display: flex;
	align-items: center;
	padding: 1.8rem 0;
	
	&:not(:last-child){
		border-bottom: 1px solid var(--color-separator);
	}
`

const Thumbnail = styled.figure`
	flex-basis: 8.9rem;
	height: 8.9rem;
	background: rgba(0, 0, 0, 0.198918);
	position: relative;

	&::before{
		content: '';
		position: absolute;
		top:0;
		right:0;
		left:0;
		bottom:0;
		background: rgba(0, 0, 0, 0.198918);
		z-index: 2;
	}


`;

const PlayIconImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;

`

const BandImage = styled.img`
	object-fit: cover;
	position: relative;
	z-index: 1;
`

const InfoWrapper = styled.div`
	flex-basis: calc(100% - 8.9rem);
	padding-left: 1.4rem;
`;

const AuthorWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

`

const Author = styled.span`
	color: var(--color-label);
	font-size: 1.12rem;
	line-height: 13px;
`;

const Options = styled.button`
		width: 1.6rem;
		height: 0.4rem;
		outline: none;
		border: none;
		background: none;
		
		/*
			Creating the three dots options button
		*/
		.circle::before, .circle::after{
			content: '';
			position: absolute;
		}

		.circle, .circle::before, .circle::after{
			width: 4px;
			height: 4px;
			background: var(--color-description);
			border-radius: 50%;
		}

		.circle{
			position: relative;
			margin: 0 auto;
		}


		.circle::before{
			left: -6px;
		}
		.circle::after{
			right: -6px;
		}
`;

const NameWrapper = styled.div`
	height: 8rem;
	overflow-y: hidden;
	position: relative;

	&::before{
		content: '';
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background: linear-gradient(to top, var(--color-white) 5%,  transparent 40% );
	}

	
	@media ${props => props.theme.mediaQueries.land}{
		height: auto;
		margin-bottom: 0.5rem;

		&::before{
			display: none;
		}
	}
`

const Name = styled.h2`
	color: var(--color-secondary);
	font-size: 1.7rem;
	line-height: 20px;
	margin-bottom: 0.5rem;
	margin-top: 0.3rem;
`;

const Description = styled.p`
	color: var(--color-description);
	font-size: 1.3rem;
	line-height: 16px;
`;

const Interactions = styled.ul`
	list-style: none;
	display: flex;

`

const InteractionItem = styled.li`
	display: flex;
	align-items: center;
	&:not(:last-child){
		margin-right: 4.6rem;
	}
`


const IconImage = styled.img`
	margin-right: 0.7rem;
`;

const Number = styled.span`
	color: var(--color-label);
	font-size: 1.3rem;
	line-height: 16px;
`

const SongFooter = styled.div`
	
	@media ${props => props.theme.mediaQueries.desktop}{
		display: flex;	
		align-items: center;
		justify-content: space-between;
	}

`

const ProgressBarWrapper = styled.div`
	display: none;

	@media ${props => props.theme.mediaQueries.desktop}{
		display: flex;
		align-items: center;
	}

`;

const ProgressBar = styled.div`
		width: 130px;
		height: 5px;
		background: var(--color-bar);
		border-radius: 56px;
		position: relative;

		&::before{
			content: '';
			position: absolute;
			left: 0;
			height: 100%;
			border-radius: 56px;
			width: ${props => `${props.per}%`};
			background: var(--color-progress);

		}

`;

const Percentage = styled.span`
	font-size: 1.3rem;
	line-height: 16px;
	color: var(--color-label);
	margin-left: 1.6rem;

`




const Song = ( props ) => {

		const { author , name, description, likes, listens, img, percentage} = props.song;

    return (
    	<Wrapper>
    		<Thumbnail>
    			<BandImage src={require(`../assets/images/${img}.png`)}/>
    			<PlayIconImg src={PlayIcon}/>
    		</Thumbnail>
				<InfoWrapper>
					<AuthorWrapper>
						<Author>
							{ author }
						</Author>					
						<Options>
							<div className="circle"></div>
						</Options>
					</AuthorWrapper>
					<NameWrapper>
						<Name>
							{ name }
						</Name>
						<Description>
							{description}
						</Description>
					</NameWrapper>
					<SongFooter>
						<Interactions>
							<InteractionItem>
								<IconImage src={HeartIcon}/>
								<Number>
									{ likes }
								</Number>
							</InteractionItem>
							<InteractionItem>
								<IconImage src={HeadphonesIcon}/>
								<Number>
									{ listens }
								</Number>
							</InteractionItem>
							<InteractionItem>
								<IconImage src={CloudIcon}/>
							</InteractionItem>
						</Interactions>
						<ProgressBarWrapper>
							<ProgressBar per={ percentage }/>
							<Percentage>{ percentage }%</Percentage>
						</ProgressBarWrapper>
							



					</SongFooter>

					
				</InfoWrapper>
    	</Wrapper>
    );
};

export default Song;
