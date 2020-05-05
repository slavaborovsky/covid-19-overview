import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useCountriesData } from '../../utils/custom-hooks/use-countries-data';
import { withStyles } from '@material-ui/core';

const CustomListItem = withStyles({
	root: {
		padding: '1em',
	},
})(ListItem);

export const CountryInfo = ({ countryIso3Code }) => {
	const { data: countriesData } = useCountriesData();
	const [data, setData] = useState(null);

	useEffect(() => {
		if (countriesData) {
			const countryData = countriesData.initialData.find(({ iso3 }) => countryIso3Code === iso3);
			setData(countryData);
		}
	}, [countriesData, countryIso3Code]);

	return (
		<div className="bg-card shadow-2xl rounded-lg flex flex-col justify-center">
			{data ? (
				<React.Fragment>
					<h2 className="text-default text-center break-all text-2xl my-3">Overview Information:</h2>
					<List>
						<CustomListItem className="border-t border-default flex flex-col shadow-inner">
							<p className="text-default text-center break-all">
								<span className="text-base whitespace-no-wrap">
									Infected: <CountUp className="text-warning" start={0} end={data.cases} duration={1} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base whitespace-no-wrap">
									Today: <CountUp className="text-warning" start={0} end={data.todayCases} duration={1} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base whitespace-no-wrap">
									Active: <CountUp className="text-warning" start={0} end={data.active} duration={1} separator="," />
								</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border-t border-default flex flex-col shadow-inner">
							<p className="text-default text-center break-all">
								<span className="text-base whitespace-no-wrap">
									Deaths: <CountUp className="text-error" start={0} end={data.deaths} duration={1} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base whitespace-no-wrap">
									Today: <CountUp className="text-error" start={0} end={data.todayDeaths} duration={1} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base whitespace-no-wrap">
									Critical: <CountUp className="text-error" start={0} end={data.critical} duration={1} separator="," />
								</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border-t border-default flex flex-col shadow-inner">
							<p className="text-default text-center break-all">
								<span className="text-base whitespace-no-wrap">
									Recovered:{' '}
									<CountUp className="text-success" start={0} end={data.recovered} duration={1} separator="," />
								</span>
							</p>
						</CustomListItem>

						<CustomListItem className="border-t border-b border-default flex flex-col shadow-inner">
							<p className="text-default text-center break-all">
								<span className="text-base whitespace-no-wrap">
									Total tests:{' '}
									<CountUp className="text-info" start={0} end={data.totalTests} duration={1} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base whitespace-no-wrap">
									Tests per a million:{' '}
									<CountUp className="text-info" start={0} end={data.testsPerOneMillion} duration={1} separator="," />
								</span>
							</p>
						</CustomListItem>
					</List>
				</React.Fragment>
			) : (
				<p className="text-base italic text-default text-default text-center break-all my-auto mx-6">
					Please specify country in the dropdown menu.
				</p>
			)}
		</div>
	);
};

export const MemoizedCountryInfo = React.memo(CountryInfo);
