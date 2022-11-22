import styled from "styled-components"; 

const Card = styled.img`
	object-fit: cover;
	border-radius: 10px;
	height: 350px;
	width: 250px;
`;
const Overlay = styled.span`
	position: absolute;
  	transition: all .5s ease;
  	opacity: 0;
  	background: white;
	border-radius: 10px;
`;

const CardContainer = styled.li`
	display: inline-block;
	position: relative;
	cursor: pointer;
	margin: 20px;
	:hover ${Overlay} {
		opacity:0.5;
		height: 100%;
		width: 100%;
		top: 0;
		right: 0;
	}
`;


export {Card, CardContainer, Overlay};
