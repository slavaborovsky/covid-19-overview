import axios from 'axios';

const baseUrl = 'https://coronavirus-19-api.herokuapp.com';

export const fetchTotalData = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/all`);
		return data;
	} catch (error) {
		return {};
	}
};

export const fetchCountiresData = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/countries`);
		return data;
	} catch (error) {
		return [];
	}
};
