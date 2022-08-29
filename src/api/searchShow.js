import axios from 'axios';

export const searchShow = async showName => {
	try {
		const res = await axios.get(
			`https://api.tvmaze.com/singlesearch/shows?q=${showName}`,
		);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
