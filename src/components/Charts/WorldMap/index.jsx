import React from 'react';

import { useCountriesData } from '../../../utils/custom-hooks';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import WorldJson from './world.topojson';

export const WorldMapChart = () => {
	const { data, error } = useCountriesData();

	if (error) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading World virus spreading data</h2>;
	}

	return <MemoizedBaseMapChart data={data} geography={WorldJson} />;
};
