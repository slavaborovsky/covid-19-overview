import { useMemo, useRef } from 'react';
import useSWR from 'swr';

import { WORLD_REGIONS } from '../world-regions';
import { getCountryIsoCodes } from '../get-country-iso-codes';

function sortCountriesAndAttachIsoCodes(data) {
	if (!data) {
		return [];
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

	return filteredCountriesDataWithIsoCodes.slice();
}

export const useCountriesData = () => {
	const { data, error } = useSWR('countries');
	let updatedAtRef = useRef();

	const memoizedCountriesData = useMemo(() => {
		updatedAtRef.current = new Date();
		return sortCountriesAndAttachIsoCodes(data);
	}, [data]);

	return {
		data: memoizedCountriesData,
		updatedAt: updatedAtRef.current,
		error,
	};
};
