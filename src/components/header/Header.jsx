import React, { useState, useEffect } from 'react';
import {
	StyledDiv,
	MenuContainer,
	HamburgerIcon,
	MenuContent,
	StyledButton
} from './header.style';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [menuOpen]);

	return (
		<>
			<StyledDiv>
				<h1>The Planets</h1>
				<HamburgerIcon
					onClick={toggleMenu}
					src='/public/planets-data/assets/icon-hamburger.svg'
					alt='Menu'
				/>
			</StyledDiv>
			<MenuContainer open={menuOpen}>
				<MenuContent>
					<div>
						<StyledButton>MERCURY</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
					<div>
						<StyledButton>VENUS</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
					<div>
						<StyledButton>EARTH</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
					<div>
						<StyledButton>MARS</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
					<div>
						<StyledButton>JUPITER</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<StyledButton>SATURN</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<StyledButton>URANUS</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<StyledButton>NEPTUNE</StyledButton>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
				</MenuContent>
			</MenuContainer>
		</>
	);
};

export default Header;
