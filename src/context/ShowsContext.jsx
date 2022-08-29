import { useState, createContext } from 'react';
import { searchShows } from '../api/searchShows';
import { searchShow } from '../api/searchShow';

export const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
	const [show, setShow] = useState({});
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

	const searchSingleShow = async showName => {
		try {
			setLoading(true);
			const res = await searchShow(showName);
			setTimeout(() => {
				setShow(res);
				setLoading(false);
				// return res;
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	return (
		<ShowsContext.Provider
			value={{
				searchTvShows,
				searchSingleShow,
				shows,
				show,
				loading,
			}}>
			{children}
		</ShowsContext.Provider>
	);
};
