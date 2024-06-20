import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: 36px;
	align-items: center;
	padding: 30px;
	margin-left: 0;
	margin-right: 0;
	img {
		width: 24px;
		height: 17px;
	}
	
	border-bottom: 1px solid #979797;
`;

const HamburgerIcon = styled.img`
	cursor: pointer;
	width: 24px;
	height: 17px;
`;

const MenuContainer = styled.div`
	position: fixed;
	top: 60px;
	left: ${props => (props.open ? '0' : '-2000px')};
	width: 100%;
	height: 100%;
	background-color: #444;
	transition: left 0.3s ease;
	background-image: url('/public/planets-data/assets/background-stars.svg');
	background-color: #070724;
	
`;

const MenuContent = styled.div`
	padding: 20px;
	color: white;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.5px solid #979797;
	}

	img {
		width: 10px;
		height: 10px;
		margin-right: 20px;
	}
`;

const StyledButton = styled.button`
	color: #979797;
	margin-bottom: 5px;
	font-size: 12px;
	font-family: 'League Spartan', sans-serif;
	background: none;
	border: none;
	margin-top: 5px;
	font-family: 'League Spartan', sans-serif;
	font-weight: 600;
	padding: 20px;
	color: white;
	font-size: 18px;
`;

export { StyledButton, StyledDiv, HamburgerIcon, MenuContainer, MenuContent };
