import { ShowsProvider } from './context/ShowsContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<ShowsProvider>
			<Navbar />
			<Home />
		</ShowsProvider>
	);
};

export default App;
