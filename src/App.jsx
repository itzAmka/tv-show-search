import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ShowsMain from './pages/show/ShowsMain';
import ShowDetails from './pages/show/ShowDetails';
import Episodes from './pages/Show/Episodes';
import Seasons from './pages/Show/Seasons';
import Cast from './pages/Show/Cast';
import Crew from './pages/Show/Crew';
import Characters from './pages/Show/Characters';

const App = () => {
	return (
		<ShowsProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/people' element={<h1 className='m-20'>People</h1>} />
					<Route path='/show/:id/:showName' element={<ShowsMain />}>
						<Route path='' element={<ShowDetails />} />
						<Route path='episodes' element={<Episodes />} />
						<Route path='seasons' element={<Seasons />} />
						<Route path='cast' element={<Cast />} />
						<Route path='crew' element={<Crew />} />
						<Route path='characters' element={<Characters />} />
					</Route>
				</Routes>
			</Router>
		</ShowsProvider>
	);
};

export default App;
