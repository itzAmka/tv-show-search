import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar bg-slate-800 justify-between items-center px-5 z-50 w-full fixed top-0 sm:flex-row flex-col gap-5'>
			<h1 className='text-2xl'>
				<Link to='/'>QUERY SHOWS</Link>
			</h1>
			<ul className='flex gap-5'>
				<li>
					<NavLink to='/'>Tv Shows</NavLink>
				</li>
				<li>
					<NavLink to='/people'>People</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
