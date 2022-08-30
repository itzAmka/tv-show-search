import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowsContext } from '../../context/ShowsContext';
import Spinner from '../../components/Spinner';

const Episodes = () => {
	const { episodes, getEpisodesById, loading } = useContext(ShowsContext);
	const params = useParams();

	useEffect(() => {
		getEpisodesById(params.id);
	}, []);

	return (
		<div className='max-w-7xl mx-auto'>
			{loading ? (
				<>
					<Spinner />
				</>
			) : (
				<table className='table w-full border-collapse border border-slate-500 '>
					<thead>
						<tr className='bg-red-200'>
							<th className='border border-slate-600'>Episodes</th>
							<th className='border border-slate-600'>Name</th>
							<th className='border border-slate-600'>Date</th>
							<th className='border border-slate-600'>Rating</th>
						</tr>
					</thead>
					<tbody>
						{episodes.map(episode => {
							return (
								<tr className='even:text-blue-500' key={episode.id}>
									<td className='border border-slate-700'>
										S{episode.season} EP{episode.number}
									</td>
									<td className='border border-slate-700'>
										<a
											href={episode.url}
											target='_blank'
											rel='noreferrer'
											className='btn btn-link'>
											{episode.name}
										</a>
									</td>
									<td className='border border-slate-700'>{episode.airdate}</td>
									<td className='border border-slate-700'>
										{episode.rating?.average ? episode.rating?.average : 'N/A'}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Episodes;
