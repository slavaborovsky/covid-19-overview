import React, { useContext } from 'react';
import useSwr from 'swr';
import { getUSASpreadingData } from '../../../utils/api';
import { ThemeSelectorContext } from '../../../context/theme/theme-context';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import USAJson from './USA.json';

export const USAMapChart = () => {
	const { theme } = useContext(ThemeSelectorContext);

	const { data, error } = useSwr('usaSpreadingData', getUSASpreadingData);

	if (error) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading USA virus spreading data</h2>;
	}

	return <MemoizedBaseMapChart projection="geoAlbersUsa" data={data} geography={USAJson} />;
};
