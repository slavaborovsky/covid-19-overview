import { useMemo, useRef } from 'react';
import useSWR from 'swr';
import countries from 'i18n-iso-countries';
import coutryLookup from 'country-code-lookup';

import { getNumericComparer } from '../get-array-comparer';
import { WORLD_REGIONS } from '../world-regions';

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
