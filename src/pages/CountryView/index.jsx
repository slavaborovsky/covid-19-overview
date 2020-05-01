import React, { useState, useEffect } from 'react';
import userSWR from 'swr';
import classNames from 'classnames';
import { CountryPicker, Loader } from '../../components';
import { useQuery } from '../../utils/custom-hooks';

import styles from './styles.module.scss';

export const CountryView = () => {
	const query = useQuery();

	const [selectedCountry, setSelectedCountry] = useState(null);

	const { data, error } = userSWR('api/countries');

	const requestedCountry = query.get('iso3');

	useEffect(() => {
		if (data && requestedCountry) {
			const countryFromUrl = data.countries.find(({ iso3 }) => iso3 === requestedCountry);
			if (countryFromUrl) {
				setSelectedCountry(countryFromUrl);
			}
		}
	}, [data, requestedCountry]);

	const renderError = <h3 className="text-2xl text-error text-center my-auto">Error loading countries</h3>;

	return (
		<div className={classNames(styles.CountryViewContainer, 'grid grid-cols-1 lg:grid-cols-2 gap-6 w-full p-6')}>
			{error ? (
				renderError
			) : data ? (
				<React.Fragment>
					<div className="grid col-span-1 lg:col-span-2 justify-center items-center">
						<CountryPicker
							countries={data.countries}
							selected={selectedCountry}
							onSelect={(country) => setSelectedCountry(country)}
						/>
					</div>
					<div className="grid col-span-1 bg-primary"></div>
					<div className="grid col-span-1 bg-secondary"></div>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default CountryView;
