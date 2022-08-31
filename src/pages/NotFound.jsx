import Container from '../components/shared/Container';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Container>
			<section className='h-full grid place-items-center'>
				<div className='text-center bg-slate-800 sm:p-20 p-10 md:px-60 mt-10 sm:rounded-3xl rounded-xl'>
					<h1 className='sm:text-7xl text-3xl mb-16'>Oops!</h1>
					<p className='text-2xl mb-16'>Page Not Found</p>
					<button className='btn btn-accent lg:text-xl'>
						<Link to='/'>Go Back To Home</Link>
					</button>
				</div>
			</section>
		</Container>
	);
};

export default NotFound;
