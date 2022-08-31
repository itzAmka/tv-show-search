import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import IndexShows from './pages/IndexShows';
import ShowsNav from './pages/ShowsNav';
import ShowDetails from './pages/ShowDetails';
import Episodes from './pages/Episodes';
import Seasons from './pages/Seasons';
import Cast from './pages/Cast';
import Crew from './pages/Crew';
import Shows from './components/tv-shows/Shows';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<ShowsProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<IndexShows />} />
					<Route path='/shows' element={<Shows />}></Route>
					<Route path='/shows/:id/:showName' element={<ShowsNav />}>
						<Route path='' element={<ShowDetails />} />
						<Route path='episodes' element={<Episodes />} />
						<Route path='seasons' element={<Seasons />} />
						<Route path='cast' element={<Cast />} />
						<Route path='crew' element={<Crew />} />
					</Route>
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Router>
		</ShowsProvider>
	);
};

export default App;
