import Facts from '../components/facts/Facts';
import Header from '../components/header/Header';
import Navegation from '../components/navegation/Navegation';
import PlanetInfo from '../components/planetInfo/PlanetInfo';


const Home = () => {
	return (
		<>
			<Header />
			<Navegation />
			<PlanetInfo/>
			<Facts/>
		</>
	);
};
export default Home;
