import { useMemo, useRef } from 'react';
import useSWR from 'swr';

import { getNumericComparer } from '../get-array-comparer';
import { WORLD_REGIONS } from '../world-regions';
import { getCountryIsoCodes } from '../get-country-iso-codes';

const confirmedCasesComparer = getNumericComparer({ accessor: (data) => data.cases });
const deathsCasesComparer = getNumericComparer({ accessor: (data) => data.deaths });
const recoveredCasesComparer = getNumericComparer({ accessor: (data) => data.recovered });

function sortCounriesAndAttachCodes(data) {
	if (!data) {
		return {
			sortedByCases: [],
			sortedByDeaths: [],
			sortedByRecovers: [],
			initialData: [],
		};
	}

	const filteredCountriesDataWithIsoCodes = data.reduce((out, c) => {
		if (WORLD_REGIONS.includes(c.country.toLowerCase())) {
			return out;
		}

		const { iso2, iso3 } = getCountryIsoCodes(c.country);

		if (iso2 && iso3) {
			out.push({ ...c, iso2, iso3 });
		}

		return out;
	}, []);

	return {
		sortedByCases: filteredCountriesDataWithIsoCodes.sort(confirmedCasesComparer),
		sortedByDeaths: filteredCountriesDataWithIsoCodes.sort(deathsCasesComparer),
		sortedByRecovers: filteredCountriesDataWithIsoCodes.sort(recoveredCasesComparer),
		initialData: filteredCountriesDataWithIsoCodes,
	};
}

export const useCountriesData = () => {
	const { data, error } = useSWR('countries');
	let updatedAtRef = useRef();

	const memoizedCountriesData = useMemo(() => {
		updatedAtRef.current = new Date();
		return sortCounriesAndAttachCodes(data);
	}, [data]);

	return {
		data: memoizedCountriesData,
		updatedAt: updatedAtRef.current,
		error,
	};
};
