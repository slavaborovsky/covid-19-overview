import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import useSWR from 'swr';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { Card, GlobalDailyChart } from '../../components';
import { useCountriesData } from '../../utils/custom-hooks';
import { getNumericComparer } from '../../utils/get-array-comparer';

const getInfectedComparer = (ordering = 'desc') => {
	return getNumericComparer({ accessor: (data) => data.cases, desc: ordering === 'desc' });
};
const getDeathsComparer = (ordering = 'desc') => {
	return getNumericComparer({ accessor: (data) => data.deaths, desc: ordering === 'desc' });
};
const getRecoversComparer = (ordering = 'desc') => {
	return getNumericComparer({ accessor: (data) => data.recovered, desc: ordering === 'desc' });
};

const TotalsDashboard = () => {
	const { data: totalsData, error: totalsError } = useSWR('all');
	const { data: countriesData, updatedAt, error: countriesError } = useCountriesData();

	const [topCountState, setTopCountState] = useState({
		infected: 5,
		deaths: 5,
		recovers: 5,
	});

	const [sortState, setSortState] = useState({
		infected: 'desc',
		deaths: 'desc',
		recovers: 'desc',
	});

	const sortedByInfected = useMemo(() => {
		return countriesData.slice().sort(getInfectedComparer(sortState.infected));
	}, [countriesData, sortState.infected]);

	const sortedByDeaths = useMemo(() => {
		return countriesData.slice().sort(getDeathsComparer(sortState.deaths));
	}, [countriesData, sortState.deaths]);

	const sortedByRecovers = useMemo(() => {
		return countriesData.slice().sort(getRecoversComparer(sortState.recovers));
	}, [countriesData, sortState.recovers]);

	const globalDataError = <p className="text-error text-2xl">Global data error!</p>;

	const renderLastUpdateAt = (
		<p className="text-sm opacity-60 text-default mb-1">
			Last update: {updatedAt.toLocaleTimeString()} {updatedAt.toLocaleDateString()}
		</p>
	);

	console.count('Global');

	const renderInfectedHeader = () => (
		<React.Fragment>
			Infected
			<IconButton
				onClick={() => {
					setSortState((s) => ({ ...s, infected: sortState.infected === 'desc' ? 'asc' : 'desc' }));
					setTopCountState((s) => ({ ...s, infected: 5 }));
				}}
			>
				{sortState.infected === 'desc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
			</IconButton>
		</React.Fragment>
	);

	const renderDeathsHeader = () => (
		<React.Fragment>
			Deaths
			<IconButton
				onClick={() => {
					setSortState((s) => ({ ...s, deaths: sortState.deaths === 'desc' ? 'asc' : 'desc' }));
					setTopCountState((s) => ({ ...s, deaths: 5 }));
				}}
			>
				{sortState.deaths === 'desc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
			</IconButton>
		</React.Fragment>
	);

	const renderRecoversHeader = () => (
		<React.Fragment>
			Recovers
			<IconButton
				onClick={() => {
					setSortState((s) => ({ ...s, recovers: sortState.recovers === 'desc' ? 'asc' : 'desc' }));
					setTopCountState((s) => ({ ...s, recovers: 5 }));
				}}
			>
				{sortState.recovers === 'desc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
			</IconButton>
		</React.Fragment>
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

	const renderTopFiveInfectedCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (!(sortedByInfected && sortedByInfected.length > 0)) {
			return null;
		}

		return (
			<React.Fragment>
				<List>
					{sortedByInfected.slice(0, topCountState.infected).map((data) => (
						<ListItem className="shadow-inner px-4 py-2 flex flex-col" key={data.country}>
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
				{topCountState.infected < countriesData.length && (
					<Button onClick={() => setTopCountState((s) => ({ ...s, infected: s.infected * 2 }))}>Show More</Button>
				)}
			</React.Fragment>
		);
	};

	const renderTopFiveDeathsCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (!(sortedByDeaths && sortedByDeaths.length > 0)) {
			return null;
		}

		return (
			<React.Fragment>
				<List>
					{sortedByDeaths.slice(0, topCountState.deaths).map((data) => (
						<ListItem className="shadow-inner px-4 py-2 flex flex-col" key={data.country}>
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
				{topCountState.deaths < countriesData.length && (
					<Button onClick={() => setTopCountState((s) => ({ ...s, deaths: s.deaths * 2 }))}>Show More</Button>
				)}
			</React.Fragment>
		);
	};

	const renderTopFiveRecoversCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (!(sortedByRecovers && sortedByRecovers.length > 0)) {
			return null;
		}

		return (
			<React.Fragment>
				<List>
					{sortedByRecovers.slice(0, topCountState.recovers).map((data) => (
						<ListItem className="shadow-inner px-4 py-2 flex flex-col" key={data.country}>
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
				{topCountState.recovers < countriesData.length && (
					<Button onClick={() => setTopCountState((s) => ({ ...s, recovers: s.recovers * 2 }))}>Show More</Button>
				)}
			</React.Fragment>
		);
	};

	return (
		<div className="flex-auto overflow-y-auto">
			<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 xl:gap-16 min-h-full py-12 px-16 text-center">
				<Card classes="col-span-2">
					{{
						renderHeader: renderInfectedHeader,
						renderCount: renderGlobalConfirmedCases,
						renderList: renderTopFiveInfectedCountries,
					}}
				</Card>

				<Card classes="col-span-2">
					{{
						renderHeader: renderDeathsHeader,
						renderCount: renderGlobalDeathsCases,
						renderList: renderTopFiveDeathsCountries,
					}}
				</Card>

				<Card classes="col-span-2 col-start-1 md:col-start-2 xl:col-start-5">
					{{
						renderHeader: renderRecoversHeader,
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
