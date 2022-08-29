import { Outlet, Link } from 'react-router-dom';
import Container from '../../components/shared/Container';

const ShowsMain = () => {
	return (
		<Container>
			<section className='max-w-7xl mx-auto mt-50 '>
				<nav className='navbar bg-slate-800 mb-5 rounded'>
					<ul className='flex justify-around gap-5 w-full'>
						<li>
							<Link to='' className='btn btn-link'>
								Main
							</Link>
						</li>
						<li>
							<Link to='episodes' className='btn btn-link'>
								Episodes
							</Link>
						</li>
						<li>
							<Link to='seasons' className='btn btn-link'>
								Seasons
							</Link>
						</li>
						<li>
							<Link to='cast' className='btn btn-link'>
								Cast
							</Link>
						</li>
						<li>
							<Link to='crew' className='btn btn-link'>
								Crew
							</Link>
						</li>
						<li>
							<Link to='characters' className='btn btn-link'>
								Characters
							</Link>
						</li>
					</ul>
				</nav>
			</section>
			<Outlet />
		</Container>
	);
};

export default ShowsMain;
