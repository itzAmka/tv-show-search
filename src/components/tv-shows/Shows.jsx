import { useContext } from 'react';
import { ShowsContext } from '../../context/ShowsContext';
import Show from './Show';
import Spinner from '../Spinner';
import Container from '../shared/Container';
import { Outlet } from 'react-router-dom';

const Shows = () => {
	const { shows, loading } = useContext(ShowsContext);

	return (
		<>
			<div className='grid place-items-center max-w-7xl  mx-auto mt-20'>
				<section className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:mt-16 mt-10 '>
					{loading ? (
						<></>
					) : (
						<>
							{shows.map(showObj => {
								const { show } = showObj;
								return <Show key={show.id} show={show} />;
							})}
						</>
					)}
				</section>
			</div>
			<Outlet />
		</>
	);
};

export default Shows;
