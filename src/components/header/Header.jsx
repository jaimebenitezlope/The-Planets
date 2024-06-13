import React, { useState, useEffect } from 'react';
import {
	StyledDiv,
	MenuContainer,
	HamburgerIcon,
	MenuContent
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
						<p>MERCURY</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>VENUS</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>EARTH</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>MARS</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>JUPITER</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>SATURN</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>URANUS</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>

					<div>
						<p>NEPTUNE</p>
						<img src='/public/planets-data/assets/icons8-arrow-50.png' alt='' />
					</div>
				</MenuContent>
			</MenuContainer>
		</>
	);
};

export default Header;
