import React, { useState, useEffect } from 'react';
import userSWR from 'swr';
import { CountryPicker, Loader } from '../../components';
import { useQuery } from '../../utils/custom-hooks';

export const CountryView = () => {
	const query = useQuery();

	const [selectedCountry, setSelectedCountry] = useState(null);

	const { data, error } = userSWR('api/countries');

	const requestedCountry = query.get('name');

	useEffect(() => {
		if (data && requestedCountry) {
			const countryFromUrl = data.countries.find(({ name }) => name.toLowerCase() === requestedCountry.toLowerCase());
			if (countryFromUrl) {
				setSelectedCountry(countryFromUrl);
			}
		}
	}, [data, requestedCountry]);

	const renderError = <h3 className="text-2xl text-error text-center my-auto">Error loading countries</h3>;

	return (
		<div className="grid h-full w-full p-4">
			{error ? (
				renderError
			) : data ? (
				<React.Fragment>
					<CountryPicker
						countries={data.countries}
						selected={selectedCountry}
						onSelect={(country) => setSelectedCountry(country)}
					/>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default CountryView;
