import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowsContext } from '../context/ShowsContext';

const SearchForm = () => {
	const { searchTvShows } = useContext(ShowsContext);
	const [showName, setShowName] = useState('');
	const navigate = useNavigate();

	const handleChange = e => {
		setShowName(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		searchTvShows(showName);
		navigate('/shows');
		setShowName('');
	};

	return (
		<form onSubmit={handleSubmit} className='md:max-w-3xl md:mx-auto mt-5 w-60'>
			<div className='form-control relative w-full'>
				<input
					type='search'
					className='input input-bordered input-primary w-full'
					placeholder='Search for shows'
					value={showName}
					onChange={handleChange}
				/>
				<button className='btn btn-primary rounded-l-none absolute right-0'>
					Search
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
