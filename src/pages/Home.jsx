import { useEffect, useContext } from 'react';
import SearchForm from '../components/SearchForm';
import Container from '../components/shared/Container';
import Spinner from '../components/Spinner';
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

	return (
		<Container>
			<SearchForm />
			{loading ? <Spinner /> : <Shows />}
		</Container>
	);
};

export default Home;
