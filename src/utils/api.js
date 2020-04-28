import axios from 'axios';

export const baseUrl = 'https://coronavirus-19-api.herokuapp.com';

export const swrFetcher = (endpoint, ...args) =>
	axios.get(`${baseUrl}/${endpoint}`, ...args).then((response) => response.data);
