import { useEffect, useContext } from 'react';
import SearchForm from '../components/SearchForm';
import Container from '../components/shared/Container';
import Shows from '../components/tv-shows/Shows';
import { ShowsContext } from '../context/ShowsContext';

const Home = () => {
	const { searchTvShows, loading } = useContext(ShowsContext);

	useEffect(() => {
		const randomTvShowNames = ['See', 'The Walking Dead'];

		const randomTvShowName =
			randomTvShowNames[Math.floor(Math.random() * randomTvShowNames.length)];
		searchTvShows(randomTvShowName);
	}, []);

	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<Container>
			<SearchForm />
			<Shows />
		</Container>
	);
};

export default Home;
