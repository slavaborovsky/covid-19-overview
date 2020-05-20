import React from 'react';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';

import { useCountriesData } from '../../../utils/custom-hooks';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import { getWorldTopojsonData } from '../../../utils/api';

export const WorldMapChart = () => {
	const { data, error } = useCountriesData();
	const { data: worldTopojson, error: topojsonError } = useSWR('worldTopojson', getWorldTopojsonData);
	const history = useHistory();

	const clickHandler = (country) => {
		history.push(`/countries?iso3=${country.iso3}`);
	};

	if (error || topojsonError) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading World virus spreading data</h2>;
	}

	return <MemoizedBaseMapChart data={data} geography={worldTopojson} clickHandler={clickHandler} />;
};
