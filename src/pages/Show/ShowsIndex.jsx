import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import Container from '../../components/shared/Container';
import { ShowsContext } from '../../context/ShowsContext';

const ShowsIndex = () => {
	const { showsIndex, getIndexShows, loading } = useContext(ShowsContext);

	if (loading) console.log('loading');

	useEffect(() => {
		getIndexShows();
	}, []);

	return (
		<Container>
			<div className='grid place-items-center max-w-7xl  mx-auto'>
				<section className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:mt-16 mt-10 '>
					{showsIndex.map(show => {
						const { id, name, image, rating, genres } = show;
						return (
							<Link
								key={id}
								to={`/shows/${id}/${name.replaceAll(' ', '_')}`}
								className='card bg-slate-800 shadow-xl max-w-xs sm:mx-0'>
								<figure className='h-full'>
									<img
										src={image ? image.medium : NoImage}
										alt={`${name} tv show poster`}
										className='w-full max-h-80 border-b'
									/>
								</figure>
								<div className='card-body px-3 py-5 relative '>
									<h2 className='card-title mt-6'>{name}</h2>
									<div className='mt-2 absolute top-0 right-0 rounded-full bg-slate-400 p-1 px-2 italic font-bold text-black'>
										{rating.average ? rating.average : 'N/A'}
									</div>
									<div className='card-actions justify-end mt-5'>
										{genres.length === 0 ? (
											<div className='badge badge-secondary badge-outline'>
												N/A
											</div>
										) : (
											<>
												{genres.map((genre, i) => {
													return (
														<div
															key={i}
															className='badge badge-secondary badge-outline'>
															{genre}
														</div>
													);
												})}
											</>
										)}
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</Container>
	);
};

export default ShowsIndex;
