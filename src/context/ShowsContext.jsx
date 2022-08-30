import { useState, createContext, useEffect } from 'react';
import { searchShows } from '../api/searchShows';
import { searchShow } from '../api/searchShow';
import { getEpisodes } from '../api/getEpisodes';
import { getSeasons } from '../api/getSeasons';
import { getCasts } from '../api/getCasts';
import { getCrews } from '../api/getCrews';
import { getShows } from '../api/getShows';

export const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
	const [show, setShow] = useState({});
	const [shows, setShows] = useState([]);
	const [showsIndex, setShowsIndex] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [seasons, setSeasons] = useState([]);
	const [casts, setCasts] = useState([]);
	const [crews, setCrews] = useState([]);
	const [loading, setLoading] = useState(false);

	const getIndexShows = async () => {
		try {
			const res = await getShows();
			setTimeout(() => {
				setShowsIndex(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

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
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	const getEpisodesById = async id => {
		try {
			setLoading(true);
			const res = await getEpisodes(id);

			setTimeout(() => {
				setEpisodes(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	const getSeasonsById = async id => {
		try {
			setLoading(true);
			const res = await getSeasons(id);

			setTimeout(() => {
				setSeasons(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	const getCastsById = async id => {
		try {
			setLoading(true);
			const res = await getCasts(id);

			setTimeout(() => {
				setCasts(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	const getCrewsById = async id => {
		try {
			setLoading(true);
			const res = await getCrews(id);

			setTimeout(() => {
				setCrews(res);
				setLoading(false);
			}, 500);
		} catch (error) {
			console.log('Errr:', error);
		}
	};

	return (
		<ShowsContext.Provider
			value={{
				getIndexShows,
				searchTvShows,
				searchSingleShow,
				getEpisodesById,
				getSeasonsById,
				getCastsById,
				getCrewsById,
				shows,
				show,
				showsIndex,
				episodes,
				seasons,
				casts,
				crews,
				loading,
			}}>
			{children}
		</ShowsContext.Provider>
	);
};
