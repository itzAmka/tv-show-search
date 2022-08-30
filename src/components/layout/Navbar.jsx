import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';

const Navbar = () => {
	return (
		<nav className='navbar bg-slate-800 justify-between items-center px-5 z-50 w-full fixed top-0 sm:flex-row flex-col sm:gap-5 gap-0'>
			<h1 className='text-2xl '>
				<Link to='/'>QUERY SHOWS</Link>
			</h1>
			<div>
				<SearchForm />
			</div>
		</nav>
	);
};

export default Navbar;
