import axios from 'axios';

export const getSeasons = async id => {
	try {
		const res = await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
