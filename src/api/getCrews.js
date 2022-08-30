import axios from 'axios';

export const getCrews = async id => {
	try {
		const res = await axios.get(`https://api.tvmaze.com/shows/${id}/crew`);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
