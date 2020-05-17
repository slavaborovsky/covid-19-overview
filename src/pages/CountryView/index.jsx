import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import { CountryPicker, MemoizedCountryInfo, CountryDailyChart } from '../../components';
import { useQuery } from '../../utils/custom-hooks';
import { getInfectedCountries } from '../../utils/api';

import styles from './styles.module.scss';

export const CountryView = () => {
	const query = useQuery();

	const [selectedCountry, setSelectedCountry] = useState(null);
	const [requestedCountry, setRequestedCountry] = useState(null);

	const { data: countriesList, error: countriesListError } = useSWR('countryLst', getInfectedCountries);

	useEffect(() => {
		const nextRequestedCountry = query.get('iso3');
		if (countriesList && requestedCountry !== nextRequestedCountry) {
			setRequestedCountry(nextRequestedCountry);

			const countryFromUrl = countriesList.find(({ iso3 }) => iso3 === nextRequestedCountry);
			if (countryFromUrl) {
				setSelectedCountry(countryFromUrl);
			}
		}
	}, [countriesList, query, requestedCountry]);

	const renderError = <h3 className="text-2xl text-error text-center my-auto">Error loading countries</h3>;

	return (
		<div className="flex-auto overflow-y-auto">
			{countriesListError ? (
				renderError
			) : countriesList ? (
				<div
					className={classNames(styles.gridContainer, 'grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-full px-16 py-8')}
				>
					<div className={classNames(styles.gridItem, 'grid col-span-1 lg:col-span-3 justify-center items-center')}>
						<CountryPicker
							countries={countriesList}
							selected={selectedCountry}
							onSelect={(country) => setSelectedCountry(country)}
						/>
					</div>
					<div className={classNames(styles.gridItem, 'grid col-span-1 lg:col-span-1')}>
						<MemoizedCountryInfo countryIso3Code={selectedCountry ? selectedCountry.iso3 : null} />
					</div>
					<div className={classNames(styles.gridItem, 'grid col-span-1 lg:col-span-2')}>
						<CountryDailyChart countryIso3Code={selectedCountry ? selectedCountry.iso3 : null} />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default CountryView;
