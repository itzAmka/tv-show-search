import axios from 'axios';

export const getEpisodes = async id => {
	try {
		const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
