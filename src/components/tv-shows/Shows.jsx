import { useContext } from 'react';
import { ShowsContext } from '../../context/ShowsContext';
import Show from './Show';
import Spinner from '../Spinner';
import Container from '../shared/Container';
import { Outlet } from 'react-router-dom';

const Shows = () => {
	const { shows, loading } = useContext(ShowsContext);

	return (
		<Container>
			<div className='grid place-items-center max-w-7xl mx-auto'>
				<>
					{loading ? (
						<div>
							<Spinner />
						</div>
					) : (
						<section className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:mt-5 mt-20 '>
							{shows.map(showObj => {
								const { show } = showObj;
								return <Show key={show.id} show={show} />;
							})}
						</section>
					)}
				</>
			</div>
			<Outlet />
		</Container>
	);
};

export default Shows;
