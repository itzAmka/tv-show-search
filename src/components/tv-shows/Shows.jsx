import { useContext } from 'react';
import { ShowsContext } from '../../context/ShowsContext';
import Show from './Show';

const Shows = () => {
	const { shows, loading } = useContext(ShowsContext);

	return (
		<section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:mt-16 mt-10 max-w-7xl mx-auto'>
			{loading ? (
				<>
					<h3>Loading...</h3>
				</>
			) : (
				<>
					{shows.map(showObj => {
						const { show } = showObj;
						return <Show key={show.id} show={show} />;
					})}
				</>
			)}
		</section>
	);
};

export default Shows;
