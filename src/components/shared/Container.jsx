const Container = ({ children }) => {
	return (
		<main className='w-full h-screen sm:px-12 px-5 sm:pt-24 pt-28 sm:pb-24 pb-28 overflow-y-auto'>
			{children}
		</main>
	);
};

export default Container;
