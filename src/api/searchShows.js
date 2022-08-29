import axios from 'axios';

export const searchShows = async showNames => {
	try {
		const res = await axios.get(
			`https://api.tvmaze.com/search/shows?q=${showNames}`,
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
