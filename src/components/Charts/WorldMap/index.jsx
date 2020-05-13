import React, { useContext } from 'react';
import { ThemeSelectorContext } from '../../../context/theme/theme-context';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import WorldJson from './world.topojson';
import { useCountriesData } from '../../../utils/custom-hooks';

export const WorldMapChart = () => {
	const { theme } = useContext(ThemeSelectorContext);

	const { data, error } = useCountriesData();

	if (error) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading World virus spreading data</h2>;
	}

	return <MemoizedBaseMapChart data={data} geography={WorldJson} />;
};
