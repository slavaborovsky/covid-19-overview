import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useCountriesData } from '../../utils/custom-hooks/use-countries-data';
import { withStyles } from '@material-ui/core';

const CustomListItem = withStyles({
	root: {
		padding: '1em',
	},
})(ListItem);

export const CountryInfo = ({ selected }) => {
	const { data: countriesData } = useCountriesData();
	const [data, setData] = useState(null);

	useEffect(() => {
		if (selected && countriesData) {
			const countryData = countriesData.initialData.find(({ iso3 }) => selected.iso3 === iso3);

			if (countryData) {
				setData(countryData);
			}
		}
	}, [countriesData, selected]);

	return (
		<div className="bg-card shadow-2xl rounded-lg flex flex-col justify-center">
			{selected && data ? (
				<React.Fragment>
					<h2 className="text-default text-center text-2xl my-3">Overview Information:</h2>
					<List>
						<CustomListItem className="border border-default flex flex-col shadow-inner">
							<p className="text-center">
								<span className="text-lg text-warning whitespace-no-wrap">Infected: {data.cases.toLocaleString()}</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-lg text-warning whitespace-no-wrap">
									Today: {data.todayCases.toLocaleString()}
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-lg text-warning whitespace-no-wrap">Active: {data.active.toLocaleString()}</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border border-default flex flex-col shadow-inner">
							<p className="text-center">
								<span className="text-lg text-error whitespace-no-wrap">Deaths: {data.deaths.toLocaleString()}</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-lg text-error whitespace-no-wrap">
									Today: {data.todayDeaths.toLocaleString()}
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-lg text-error whitespace-no-wrap">
									Critical: {data.critical.toLocaleString()}
								</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border border-default flex flex-col shadow-inner">
							<p className="text-center">
								<span className="text-lg text-success whitespace-no-wrap">
									Recovered: {data.recovered.toLocaleString()}
								</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border border-default flex flex-col shadow-inner">
							<p className="text-center">
								<span className="text-lg text-info whitespace-no-wrap">
									Total tests: {data.totalTests.toLocaleString()}
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-lg text-info whitespace-no-wrap">
									Tests per a million: {data.testsPerOneMillion.toLocaleString()}
								</span>
							</p>
						</CustomListItem>
					</List>
				</React.Fragment>
			) : (
				<p className="text-2xl text-warning text-center my-auto mx-6">
					None country selected. Please specify country in the dropdown menu.
				</p>
			)}
		</div>
	);
};
