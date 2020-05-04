import React from 'react';
import useSWR from 'swr';

import { getGlobalDailyData } from '../../../utils/api';

import { MemoizedBaseLineChart } from '../BaseLineChart';

export const GlobalDailyChart = () => {
	const { data: globalDailyData, error } = useSWR('globaDaily', getGlobalDailyData);

	return error ? (
		<p className="text-error text-2xl text-center">Error loading global daily data</p>
	) : (
		<div className="bg-card shadow-2xl rounded-lg flex flex-col justify-center max-w-full py-3">
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

export const MemoizedGlobalDailyChart = React.memo(GlobalDailyChart);
