import axios from 'axios';

export const getCasts = async id => {
	try {
		const res = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
