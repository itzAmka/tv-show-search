import { useEffect, useContext } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { ShowsContext } from '../context/ShowsContext';
import NoImage from '../assets/no-image.svg';
import Spinner from '../components/Spinner';

const ShowDetails = () => {
	const { searchSingleShow, show, loading } = useContext(ShowsContext);
	const params = useParams();

	const {
		name,
		genres,
		image,
		rating,
		type,
		language,
		status,
		schedule,
		summary,
		premiered,
	} = show;

	useEffect(() => {
		const showName = params.showName.replaceAll('_', ' ');
		searchSingleShow(showName);
	}, []);

	return (
		<div className='max-w-7xl mx-auto'>
			{loading ? (
				<Spinner />
			) : (
				<>
					<section className='flex gap-5 lg:flex-row flex-col'>
						<div className='shadow-lg md:self-start self-center rounded-lg overflow-hidden min-w-max'>
							<img
								src={image ? image.medium : NoImage}
								alt=''
								className='min-h-max '
							/>
						</div>
						<div className='bg-slate-700 p-5 rounded flex flex-col grow pl-2 pr-7 md:mt-0 mt-3  md:text-start md:self-start text-center self-center'>
							<div className='flex flex-col'>
								<h2 className='text-2xl font-bold italic'>
									{name} - {premiered && premiered.slice(0, 4)} (
									<span className='text-xl'>
										rating: {rating?.average ? rating.average : 'N/A'}
									</span>
									)
									<div>
										{genres && genres?.length === 0 ? (
											<div className='badge badge-secondary badge-outline'>
												N/A
											</div>
										) : (
											<>
												{genres?.map((genre, i) => {
													return (
														<div
															key={i}
															className='badge badge-secondary badge-outline mx-2'>
															{genre}
														</div>
													);
												})}
											</>
										)}
									</div>
								</h2>
								<p className='mt-5 text-xl'>
									{summary &&
										summary
											?.replaceAll('<p>', '')
											?.replaceAll('</p>', '')
											?.replaceAll('<b>', '')
											?.replaceAll('</b>', '')}
								</p>
							</div>
						</div>
						<section className='bg-slate-700 p-4 lg:max-w-max rounded w-full'>
							<h2 className='text-2xl font-bold italic mb-3'>Show Info</h2>
							<div className='text-xl italic'>
								<p>
									<span className='font-bold'>Show Type: </span> {type && type}
								</p>
								<p>
									<span className='font-bold'> Language: </span>
									{language && language}
								</p>
								<p>
									<span className='font-bold'>Status: </span> {status && status}
								</p>
								<div>
									{schedule && (
										<>
											<p className='flex gap-2'>
												<span className='font-bold'>Schedule: </span>
												{schedule?.days?.length === 7 ? (
													<span>Everyday</span>
												) : (
													<>
														{schedule?.days?.map(day => (
															<span key={day}>{day}</span>
														))}
													</>
												)}
												{schedule?.days?.length === 0 && <span>N/A</span>}
											</p>
										</>
									)}
								</div>
							</div>
						</section>
					</section>
				</>
			)}
			<Outlet />
		</div>
	);
};

export default ShowDetails;
