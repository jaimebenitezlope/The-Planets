import Container from '../components/container/Container';
import Facts from '../components/facts/Facts';
import Header from '../components/header/Header';
import Navegation from '../components/navegation/Navegation';
import PlanetInfo from '../components/planetInfo/PlanetInfo';

const Home = () => {
	return (
		<>
			<Header />

			<Container>
				<Navegation />
			    <PlanetInfo />
			</Container>
			
			<Facts />
		</>
	);
};
export default Home;
