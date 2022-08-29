import SearchForm from '../components/SearchForm';
import Container from '../components/shared/Container';
import Shows from '../components/tv-shows/Shows';

const Home = () => {
	return (
		<Container>
			<SearchForm />
			<Shows />
		</Container>
	);
};

export default Home;
