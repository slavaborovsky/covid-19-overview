import { useMemo } from 'react';
import useSWR from 'swr';

import { getNumericComparer } from '../get-array-comparer';

const confirmedCasesComparer = getNumericComparer({ accessor: (data) => data.cases });
const deathsCasesComparer = getNumericComparer({ accessor: (data) => data.deaths });
const recoveredCasesComparer = getNumericComparer({ accessor: (data) => data.recovered });

const INVALID_COUNTRIES = ['world', 'total', 'total:', 'europe', 'north america', 'south america', 'asia', 'africa'];

function aggregateCountriesTopData(data, count) {
	if (!data) {
		return data;
	}

	const filteredCountriesData = data.filter(({ country }) => !INVALID_COUNTRIES.includes(country.toLowerCase()));
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
