import React from 'react';
import useSWR from 'swr';

import { getGlobalDailyData } from '../../../utils/api';

import { MemoizedBaseLineChart } from '../BaseLineChart';

export const GlobalDailyChart = () => {
	const { data: globalDailyData, error } = useSWR('globalDaily', getGlobalDailyData);

	return error ? (
		<p className="text-error text-2xl text-center">Error loading global daily data</p>
	) : (
		<div className="bg-card shadow-md rounded-md flex flex-col justify-center h-full max-w-full p-3">
			{globalDailyData ? (
				<MemoizedBaseLineChart data={globalDailyData} />
			) : (
				<p className="text-base italic text-default text-center my-auto mx-6">
					None global historical details available
				</p>
			)}
		</div>
	);
};
