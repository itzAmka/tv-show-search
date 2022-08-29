import { useState } from 'react';

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Submitted');
	};

	return (
		<form onSubmit={handleSubmit} className='md:max-w-3xl md:mx-auto mt-5'>
			<div className='form-control relative'>
				<input
					type='search'
					className='input input-bordered input-primary w-full'
					placeholder='Search for people'
					value={searchTerm}
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
