import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import ShowsIndex from './pages/show/ShowsIndex';
import ShowsNav from './pages/show/ShowsNav';
import ShowDetails from './pages/show/ShowDetails';
import Episodes from './pages/show/Episodes';
import Seasons from './pages/show/Seasons';
import Cast from './pages/show/Cast';
import Crew from './pages/show/Crew';
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
