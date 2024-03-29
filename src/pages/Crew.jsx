import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowsContext } from '../context/ShowsContext';
import Spinner from '../components/Spinner';

const Crew = () => {
	const { crews, getCrewsById, loading } = useContext(ShowsContext);
	const params = useParams();

	useEffect(() => {
		getCrewsById(params.id);
	}, []);

	return (
		<div className='max-w-7xl mx-auto'>
			{loading ? (
				<>
					<Spinner />
				</>
			) : (
				<>
					{crews.length === 0 ? (
						<div className='mb-10 bg-slate-800 p-5 rounded'>N/A</div>
					) : (
						crews.map((crew, i) => {
							const { person, type } = crew;
							return (
								<div
									key={`${person.id}${i}`}
									className='mb-10 bg-slate-800 p-5 rounded'>
									<div className='flex sm:flex-row flex-col gap-4 mb-5'>
										<img src={person.image?.medium} alt='' />
										<h2>
											<a
												href={person.url}
												target='_blank'
												rel='noreferrer'
												className='text-2xl font-bold italic btn-link'>
												{person.name}
											</a>
											<p className='text-2xl font-bold italic mt-4'>{type}</p>
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

export default Crew;
