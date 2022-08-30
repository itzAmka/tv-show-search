import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowsContext } from '../../context/ShowsContext';
import Spinner from '../../components/Spinner';

const Cast = () => {
	const { casts, getCastsById, loading } = useContext(ShowsContext);
	const params = useParams();

	useEffect(() => {
		getCastsById(params.id);
	}, []);

	return (
		<div className='max-w-7xl mx-auto'>
			{loading ? (
				<>
					<Spinner />
				</>
			) : (
				<>
					{casts.map(cast => {
						const { person, character } = cast;
						return (
							<div key={person.id} className='mb-10 bg-slate-800 p-5 rounded'>
								<div className='flex gap-4 mb-5'>
									<img src={character.image?.medium} alt='' />
									<h2 className='mb-3'>
										<a
											href={person.url}
											target='_blank'
											rel='noreferrer'
											className='text-2xl font-bold italic btn-link'>
											{person.name}
										</a>
										<span className='text-2xl font-bold italic ml-2'>
											as {character.name}
										</span>
									</h2>
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default Cast;
