const Show = () => {
	return (
		<div className='card bg-slate-800 shadow-xl max-w-xs sm:mx-0 mx-auto '>
			<figure>
				<img
					src='https://static.tvmaze.com/uploads/images/medium_portrait/36/90136.jpg'
					alt='Shoes'
					className='w-full max-h-80'
				/>
			</figure>
			<div className='card-body px-3 py-5 relative'>
				<h2 className='card-title'>Rat Bastards</h2>
				<div className='mt-2 absolute top-0 right-0 rounded-full bg-slate-400 p-1 px-2 text-black'>
					6.5
				</div>
				<div className='card-actions justify-end mt-5'>
					<div className='badge badge-secondary badge-outline'>Drama</div>
					<div className='badge badge-secondary  badge-outline'>Action</div>
					<div className='badge badge-secondary  badge-outline'>War</div>
				</div>
			</div>
		</div>
	);
};

export default Show;
