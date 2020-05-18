import React from 'react';
import { useHistory } from 'react-router-dom';

import { useCountriesData } from '../../../utils/custom-hooks';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import WorldJson from './world.topojson';

export const WorldMapChart = () => {
	const { data, error } = useCountriesData();
	const history = useHistory();

	const clickHandler = (country) => {
		history.push(`/countries?iso3=${country.iso3}`);
	};

	if (error) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading World virus spreading data</h2>;
	}

	return <MemoizedBaseMapChart data={data} geography={WorldJson} clickHandler={clickHandler} />;
};
