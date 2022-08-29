import { useState, createContext } from 'react';
import { searchShows } from '../api/searchShows';

export const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
	const [shows, setShows] = useState([]);
	const [loading, setLoading] = useState(false);

	const searchTvShows = async showNames => {
		try {
			setLoading(true);
			const res = await searchShows(showNames);

			setTimeout(() => {
				setShows(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	return (
		<ShowsContext.Provider
			value={{
				searchTvShows,
				shows,
				loading,
			}}>
			{children}
		</ShowsContext.Provider>
	);
};
