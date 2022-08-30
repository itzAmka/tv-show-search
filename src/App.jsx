import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import ShowsIndex from './pages/show/ShowsIndex';
import ShowsNav from './pages/show/ShowsNav';
import ShowDetails from './pages/show/ShowDetails';
import Episodes from './pages/Show/Episodes';
import Seasons from './pages/Show/Seasons';
import Cast from './pages/Show/Cast';
import Crew from './pages/Show/Crew';
import Shows from './components/tv-shows/Shows';

const App = () => {
	return (
		<ShowsProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<ShowsIndex />} />
					<Route path='/shows' element={<Shows />}></Route>
					<Route path='/shows/:id/:showName' element={<ShowsNav />}>
						<Route path='' element={<ShowDetails />} />
						<Route path='episodes' element={<Episodes />} />
						<Route path='seasons' element={<Seasons />} />
						<Route path='cast' element={<Cast />} />
						<Route path='crew' element={<Crew />} />
					</Route>
				</Routes>
			</Router>
		</ShowsProvider>
	);
};

export default App;
