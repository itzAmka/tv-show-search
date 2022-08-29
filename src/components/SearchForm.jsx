const SearchForm = () => {
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
				/>
				<button className='btn btn-primary rounded-l-none absolute right-0'>
					Search
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
