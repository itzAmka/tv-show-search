import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowsContext } from '../context/ShowsContext';
import Spinner from '../components/Spinner';

const Seasons = () => {
	const { seasons, getSeasonsById, loading } = useContext(ShowsContext);
	const params = useParams();

	useEffect(() => {
		getSeasonsById(params.id);
	}, []);

	return (
		<div className='max-w-7xl mx-auto'>
			{loading ? (
				<Spinner />
			) : (
				<>
					{seasons.length === 0 ? (
						<div className='mb-10 bg-slate-800 p-5 rounded'>N/A</div>
					) : (
						seasons.map(season => {
							const { id, number, image, premiereDate, url } = season;
							return (
								<div key={id} className='mb-10 bg-slate-800 p-5 rounded'>
									<div className='flex sm:flex-row flex-col gap-4 mb-5'>
										<img src={image?.medium} alt='' />

										<h2>
											<a
												href={url}
												target='_blank'
												rel='noreferrer'
												className='text-2xl font-bold italic btn-link'>
												Season {number}
												<span className='text-xl ml-2'>({premiereDate})</span>
											</a>
										</h2>
									</div>
								</div>
							);
						})
					)}
				</>
			)}
		</div>
	);
};

export default Seasons;
