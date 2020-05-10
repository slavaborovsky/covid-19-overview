import React from 'react';
import useSWR from 'swr';

import { getUSADailyData } from '../../../utils/api';

import { MemoizedBaseLineChart } from '../BaseLineChart';

export const USADailyChart = () => {
	const { data: usaDailyData, error } = useSWR('usaDaily', getUSADailyData);

	return error ? (
		<p className="text-error text-2xl text-center">Error loading USA daily data</p>
	) : (
		<div className="bg-card shadow-md rounded-md flex flex-col justify-center h-full max-w-full p-3">
			{usaDailyData ? (
				<MemoizedBaseLineChart data={usaDailyData} />
			) : (
				<p className="text-base italic text-default text-center my-auto mx-6">
					None of USA historical details available
				</p>
			)}
		</div>
	);
};
