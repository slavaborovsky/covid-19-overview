import axios from 'axios';

export const DASHBOARD_API_BASE_URL = 'https://coronavirus-19-api.herokuapp.com';
export const swrDashboardFetcher = (endpoint, ...args) =>
	axios.get(`${DASHBOARD_API_BASE_URL}/${endpoint}`, ...args).then((response) => response.data);

export const COUNTRY_INFO_API_BASE_URL = 'https://covid19.mathdro.id';
export const swrCountryInfoFetcher = (endpoint, ...args) =>
	axios.get(`${COUNTRY_INFO_API_BASE_URL}/${endpoint}`, ...args).then((response) => response.data);
