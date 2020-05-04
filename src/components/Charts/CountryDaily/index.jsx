import React from 'react';
import useSWR from 'swr';

import { getCountriesDailyData } from '../../../utils/api';

import { MemoizedBaseLineChart } from '../BaseLineChart';

export const CountryDailyChart = ({ countryIso3Code }) => {
	const { data: countriesDailyData, error } = useSWR('countriesDaily', getCountriesDailyData);

	return error ? (
		<p className="text-error text-2xl text-center">Error loading country daily data</p>
	) : (
		<div className="bg-card shadow-2xl rounded-lg flex flex-col justify-center max-w-full py-3">
			{countryIso3Code && countriesDailyData[countryIso3Code] ? (
				<MemoizedBaseLineChart data={countriesDailyData[countryIso3Code]} />
			) : (
				<p className="text-base italic text-default text-center my-auto mx-6">
					Please specify country in the dropdown menu.
				</p>
			)}
		</div>
	);
};

export const MemoizedCountryDailyChart = React.memo(CountryDailyChart);
