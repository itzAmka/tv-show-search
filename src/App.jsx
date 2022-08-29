import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';

const App = () => {
	return (
		<ShowsProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/people' element={<h1 className='m-20'>People</h1>} />
					<Route path='/show/:id/:showName' element={<ShowDetails />} />
				</Routes>
			</Router>
		</ShowsProvider>
	);
};

export default App;
