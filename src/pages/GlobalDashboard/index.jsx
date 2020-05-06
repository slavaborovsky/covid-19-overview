import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import useSWR from 'swr';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Card, GlobalDailyChart } from '../../components';
import { useCountriesData } from '../../utils/custom-hooks';
import { withStyles } from '@material-ui/core';

const CustomTextField = withStyles({
	root: {
		'& .MuiFormLabel-root': {
			color: 'var(--covid-default)',
			opacity: 0.67,
		},
		'& .MuiFormHelperText-root': {
			color: 'var(--covid-default)',
			opacity: 0.67,
		},
		'& .MuiInputBase-root': {
			color: 'var(--covid-default)',
		},
		'& .MuiInput-underline:before': {
			borderBottomColor: 'var(--covid-default)',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottomColor: 'var(--covid-default)',
		},
	},
})(TextField);

const TotalsDashboard = () => {
	const { data: totalsData, error: totalsError } = useSWR('all');
	const { data: countriesData, updatedAt, error: countriesError } = useCountriesData();

	const [searchState, setSearchState] = useState({ infected: '', deaths: '', recovered: '' });

	const [topCount] = useState(5);

	const globalDataError = <p className="text-error text-2xl">Global data error!</p>;

	const topInfectedCountries = useMemo(() => {
		if (!(countriesData && countriesData.sortedByCases)) {
			return [];
		}

		if (!searchState.infected || searchState.infected.trim().length === 0) {
			return countriesData.sortedByCases.slice(0, topCount);
		}

		return countriesData.sortedByCases
			.filter((c) => c.country.toLowerCase().includes(searchState.infected.toLowerCase()))
			.slice(0, topCount);
	}, [countriesData, searchState.infected, topCount]);

	const topDeathsCountries = useMemo(() => {
		if (!(countriesData && countriesData.sortedByDeaths)) {
			return [];
		}

		if (searchState.deaths.trim().length === 0) {
			return countriesData.sortedByDeaths.slice(0, topCount);
		}

		return countriesData.sortedByDeaths
			.filter((c) => c.country.toLowerCase().includes(searchState.deaths.toLowerCase()))
			.slice(0, topCount);
	}, [countriesData, searchState.deaths, topCount]);

	const topRecoveredCountries = useMemo(() => {
		if (!(countriesData && countriesData.sortedByRecovers)) {
			return [];
		}

		if (searchState.recovered.trim().length === 0) {
			return countriesData.sortedByRecovers.slice(0, topCount);
		}

		return countriesData.sortedByRecovers
			.filter((c) => c.country.toLowerCase().includes(searchState.recovered.toLowerCase()))
			.slice(0, topCount);
	}, [countriesData, searchState.recovered, topCount]);

	const renderLastUpdateAt = (
		<p className="text-sm opacity-60 text-default mb-1">
			Last update: {updatedAt.toLocaleTimeString()} {updatedAt.toLocaleDateString()}
		</p>
	);

	const renderGlobalConfirmedCases = () => {
		if (totalsError) {
			return globalDataError;
		}

		if (totalsData && totalsData.cases) {
			return (
				<React.Fragment>
					<p className="text-warning text-2xl">
						<CountUp start={0} end={totalsData.cases} duration={1.5} separator="," />
					</p>
					{renderLastUpdateAt}
				</React.Fragment>
			);
		}

		return <p className="text-base text-on-card">Loading cases...</p>;
	};

	const renderGlobalDeathsCases = () => {
		if (totalsError) {
			return globalDataError;
		}

		if (totalsData && totalsData.deaths) {
			return (
				<React.Fragment>
					<p className="text-error text-2xl">
						<CountUp start={0} end={totalsData.deaths} duration={1.5} separator="," />
					</p>
					{renderLastUpdateAt}
				</React.Fragment>
			);
		}

		return <p className="text-base text-on-card">Loading deaths...</p>;
	};

	const renderGlobalRecoveredCases = () => {
		if (totalsError) {
			return globalDataError;
		}

		if (totalsData && totalsData.recovered) {
			return (
				<React.Fragment>
					<p className="text-success text-2xl">
						<CountUp start={0} end={totalsData.recovered} duration={1.5} separator="," />
					</p>
					{renderLastUpdateAt}
				</React.Fragment>
			);
		}

		return <p className="text-base text-on-card">Loading recovers...</p>;
	};

	const renderTopListError = <p className="text-error text-base">Top data list error!</p>;

	const countryLink = ({ country, iso3 }) => {
		return (
			<Link
				to={`/countries?iso3=${iso3}`}
				className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold"
			>
				{country}
			</Link>
		);
	};

	const renderTopFiveConfirmedCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		return (
			<React.Fragment>
				<CustomTextField
					name="countrySearch"
					label="Country Name"
					fullWidth
					helperText="Type to find a country"
					value={searchState.infected}
					onChange={(event) => setSearchState({ ...searchState, infected: event.target.value || '' })}
				/>
				<List>
					{topInfectedCountries.map((data) => (
						<ListItem className="border shadow-inner border-default px-4 py-2 flex flex-col" key={data.country}>
							{countryLink(data)}
							<p className="text-center break-all">
								<span className="text-base text-warning whitespace-no-wrap">
									Total: <CountUp start={0} end={data.cases} duration={1.5} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base text-warning whitespace-no-wrap">
									Today: <CountUp start={0} end={data.todayCases} duration={1.5} separator="," />
								</span>
							</p>
						</ListItem>
					))}
				</List>
			</React.Fragment>
		);
	};

	const renderTopFiveDeathsCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		return (
			<React.Fragment>
				<CustomTextField
					name="countrySearch"
					label="Country Name"
					fullWidth
					helperText="Type to find a country"
					value={searchState.deaths}
					onChange={(event) => setSearchState({ ...searchState, deaths: event.target.value || '' })}
				/>
				<List>
					{topDeathsCountries.map((data) => (
						<ListItem className="border shadow-inner border-primary-300 px-4 py-2 flex flex-col" key={data.country}>
							{countryLink(data)}
							<p className="text-center break-all">
								<span className="text-base text-error whitespace-no-wrap">
									Total: <CountUp start={0} end={data.deaths} duration={1.5} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base text-error whitespace-no-wrap">
									Today: <CountUp start={0} end={data.todayDeaths} duration={1.5} separator="," />
								</span>
							</p>
						</ListItem>
					))}
				</List>
			</React.Fragment>
		);
	};

	const renderTopFiveRecoversCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		return (
			<React.Fragment>
				<CustomTextField
					name="countrySearch"
					label="Country Name"
					fullWidth
					helperText="Type to find a country"
					value={searchState.recovered}
					onChange={(event) => setSearchState({ ...searchState, recovered: event.target.value || '' })}
				/>
				<List>
					{topRecoveredCountries.map((data) => (
						<ListItem className="border shadow-inner border-primary-300 px-4 py-2 flex flex-col" key={data.country}>
							{countryLink(data)}
							<p className="text-center break-all">
								<span className="text-base text-success whitespace-no-wrap">
									Total: <CountUp start={0} end={data.recovered} duration={1.5} separator="," />
								</span>
								<span className="mx-2 text-default">|</span>
								<span className="text-base text-error whitespace-no-wrap">
									Critical: <CountUp start={0} end={data.critical} duration={1.5} separator="," />
								</span>
							</p>
						</ListItem>
					))}
				</List>
			</React.Fragment>
		);
	};

	return (
		<div className="flex-auto overflow-y-auto">
			<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 xl:gap-16 min-h-full py-12 px-16 text-center">
				<Card header="Infected" classes="col-span-2">
					{{
						renderCount: renderGlobalConfirmedCases,
						renderList: renderTopFiveConfirmedCountries,
					}}
				</Card>

				<Card header="Deaths" classes="col-span-2">
					{{
						renderCount: renderGlobalDeathsCases,
						renderList: renderTopFiveDeathsCountries,
					}}
				</Card>

				<Card header="Recovered" classes="col-span-2 col-start-1 md:col-start-2 xl:col-start-5">
					{{
						renderCount: renderGlobalRecoveredCases,
						renderList: renderTopFiveRecoversCountries,
					}}
				</Card>

				<div className="col-span-2 md:col-span-4 xl:col-span-6">
					<GlobalDailyChart />
				</div>
			</div>
		</div>
	);
};

export default TotalsDashboard;
