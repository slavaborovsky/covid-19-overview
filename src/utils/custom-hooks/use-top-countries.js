import { useMemo } from 'react';
import useSWR from 'swr';
import countries from 'i18n-iso-countries';
import coutryLookup from 'country-code-lookup';

import { getNumericComparer } from '../get-array-comparer';

const confirmedCasesComparer = getNumericComparer({ accessor: (data) => data.cases });
const deathsCasesComparer = getNumericComparer({ accessor: (data) => data.deaths });
const recoveredCasesComparer = getNumericComparer({ accessor: (data) => data.recovered });

const INVALID_COUNTRIES = ['world', 'total', 'total:', 'europe', 'north america', 'south america', 'asia', 'africa'];

function aggregateCountriesTopData(data, count) {
	if (!data) {
		return data;
	}

	const filteredCountriesData = data.reduce((out, c) => {
		if (INVALID_COUNTRIES.includes(c.country.toLowerCase())) {
			return out;
		}

		let iso2 = null;
		let iso3 = null;
		const countryName = countries.getName(c.country, 'en');

		if (countryName) {
			iso2 = countries.getAlpha2Code(countryName, 'en');
			iso3 = countries.getAlpha3Code(countryName, 'en');
		} else {
			const lookup =
				coutryLookup.byCountry(c.country) || coutryLookup.byInternet(c.country) || coutryLookup.byFips(c.country);
			if (lookup) {
				iso2 = lookup.iso2;
				iso3 = lookup.iso3;
			}
		}

		if (iso2 && iso3) {
			out.push({ ...c, iso2, iso3 });
		}

		return out;
	}, []);

	const topConfirms = filteredCountriesData.sort(confirmedCasesComparer).slice(0, count);
	const topDeaths = filteredCountriesData.sort(deathsCasesComparer).slice(0, count);
	const topRecovers = filteredCountriesData.sort(recoveredCasesComparer).slice(0, count);

	return {
		topConfirms,
		topDeaths,
		topRecovers,
	};
}

export const useTopCountries = (count = 5) => {
	const { data, error } = useSWR('countries');

	const memoizedCountriesTopData = useMemo(() => aggregateCountriesTopData(data, count), [data, count]);

	return {
		data: memoizedCountriesTopData,
		updatedAt: new Date(),
		error,
	};
};
