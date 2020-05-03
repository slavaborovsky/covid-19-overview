import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import { CountryPicker, CountryInfo, CountryDailyChart } from '../../components';
import { useQuery } from '../../utils/custom-hooks';
import { getCountires } from '../../utils/api';

import styles from './styles.module.scss';

export const CountryView = () => {
	const query = useQuery();

	const [selectedCountry, setSelectedCountry] = useState(null);
	const [requestedCountry, setRequestedCountry] = useState(null);

	const { data: countriesList, error: countriesListError } = useSWR('countryLst', getCountires);

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
		<div className={classNames(styles.CountryViewContainer, 'flex-auto overflow-y-auto')}>
			{countriesListError ? (
				renderError
			) : countriesList ? (
				<div className={classNames(styles.CountryViewGrid, 'grid grid-cols-1 lg:grid-cols-3 gap-6 px-16 py-8')}>
					<div className="grid col-span-1 lg:col-span-3 justify-center items-center">
						<CountryPicker
							countries={countriesList}
							selected={selectedCountry}
							onSelect={(country) => setSelectedCountry(country)}
						/>
					</div>
					<div className="grid col-span-1 lg:col-span-1">
						<CountryInfo selected={selectedCountry} />
					</div>
					<div className="grid col-span-1 lg:col-span-2">
						<CountryDailyChart selected={selectedCountry} />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default CountryView;