import axios from 'axios';
import { getCountryIsoCodes } from './get-country-iso-codes';

export const DASHBOARD_API_BASE_URL = 'https://coronavirus-19-api.herokuapp.com';
export const swrDashboardFetcher = (endpoint, ...args) =>
	axios.get(`${DASHBOARD_API_BASE_URL}/${endpoint}`, ...args).then((response) => response.data);

export const COUNTRY_INFO_API_BASE_URL = 'https://covid19.mathdro.id';
export const swrCountryInfoFetcher = (endpoint, ...args) =>
	axios.get(`${COUNTRY_INFO_API_BASE_URL}/${endpoint}`, ...args).then((response) => response.data);

export const getCountires = async () => {
	try {
		const { data } = await axios.get(`${COUNTRY_INFO_API_BASE_URL}/api/countries`);
		return data.countries
			.map((c) => {
				if (c.iso2 && c.iso3) {
					return c;
				}
				const { iso2, iso3 } = getCountryIsoCodes(c.name);
				return {
					...c,
					iso2,
					iso3,
				};
			})
			.filter((c) => c.iso2 && c.iso3);
	} catch (err) {
		return [];
	}
};

export const getGlobalDailyData = async () => {
	try {
		const { data } = await axios.get(`${COUNTRY_INFO_API_BASE_URL}/api/daily`);
		return data.map(({ confirmed, deaths, reportDate }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date: reportDate,
		}));
	} catch (err) {
		return [];
	}
};

export const getCountriesDailyData = async () => {
	try {
		const { data } = await axios('https://pomber.github.io/covid19/timeseries.json');
		return Object.keys(data).reduce((out, country) => {
			const { iso3 } = getCountryIsoCodes(country);
			if (iso3) {
				out[iso3] = data[country];
			}
			return out;
		}, {});
	} catch (err) {
		return [];
	}
};
