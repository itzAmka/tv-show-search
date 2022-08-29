const Navbar = () => {
	return (
		<nav className='navbar bg-slate-800 justify-between items-center px-5 z-10 w-full fixed top-0 sm:flex-row flex-col gap-5'>
			<h1 className='text-2xl'>QUERY SHOWS</h1>
			<ul className='flex gap-5'>
				<li>
					<a href='#'>Tv Shows</a>
				</li>
				<li>
					<a href='#'>People</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
