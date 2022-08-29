import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/shared/Container';
import { ShowsContext } from '../context/ShowsContext';
import NoImage from '../assets/no-image.svg';

const ShowDetails = () => {
	const { searchSingleShow, show } = useContext(ShowsContext);
	const params = useParams();

	const {
		name,
		genres,
		image,
		rating,
		type,
		language,
		status,
		ended,
		schedule,
		summary,
	} = show;

	useEffect(() => {
		const showName = params.showName.replaceAll('_', ' ');
		searchSingleShow(showName);
	}, []);

	return (
		<Container>
			<div className='flex gap-5 md:flex-row flex-col'>
				<div className='card bg-slate-800 shadow-xl max-w-xs sm:mx-0 mx-auto'>
					<figure className='h-full '>
						<img
							src={image ? image.medium : NoImage}
							alt='Shoes'
							className='w-full max-h-80 border-b'
						/>
					</figure>
					<div className='card-body px-3 py-5 relative '>
						<h2 className='card-title mt-6'>{name}</h2>
						<div className='mt-2 absolute top-0 right-0 rounded-full bg-slate-400 p-1 px-2 italic font-bold text-black'>
							{rating?.average ? rating?.average : 'N/A'}
						</div>
						<div className='card-actions justify-end mt-5'>
							{genres && genres?.length === 0 ? (
								<div className='badge badge-secondary badge-outline'>N/A</div>
							) : (
								<>
									{genres?.map((genre, i) => {
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
				</div>
				<div className='border grow'>{summary && summary}</div>
			</div>
		</Container>
	);
};

export default ShowDetails;
