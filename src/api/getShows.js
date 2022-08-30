import axios from 'axios';

export const getShows = async () => {
	try {
		const res = await axios.get(`https://api.tvmaze.com/shows`);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
