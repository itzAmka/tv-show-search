import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowsContext } from '../context/ShowsContext';

const SearchForm = () => {
	const { searchTvShows } = useContext(ShowsContext);
	const [showName, setShowName] = useState('');
	const [inputEmpty, setInputEmpty] = useState(false);
	const navigate = useNavigate();

	const handleInputState = () => {
		if (showName.length === 0 || showName.length === '') {
			setInputEmpty(true);
		} else {
			setInputEmpty(false);
		}
	};

	const handleChange = e => {
		setShowName(e.target.value);
		handleInputState();
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (showName.length > 0) {
			searchTvShows(showName);
			navigate('/shows');
			setShowName('');
		}
		handleInputState();
	};

	return (
		<form onSubmit={handleSubmit} className='md:max-w-3xl md:mx-auto mt-5 w-60'>
			<div className='form-control relative w-full'>
				<input
					type='search'
					className={`input input-bordered w-full ${
						inputEmpty ? 'input-error' : 'input-primary'
					}`}
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
