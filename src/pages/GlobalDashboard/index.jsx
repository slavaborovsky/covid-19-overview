import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import useSWR from 'swr';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Card } from '../../components';
import { useCountriesData } from '../../utils/custom-hooks';

const TotalsDashboard = () => {
	const { data: totalsData, error: totalsError } = useSWR('all');
	const { data: countriesData, updatedAt, error: countriesError } = useCountriesData();

	const [topCount] = useState(10);

	const globalDataError = <p className="text-error text-2xl">Global data error!</p>;

	const renderLastUpdateAt = (
		<p className="text-sm opacity-60 text-default mb-4">
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

		if (countriesData && countriesData.sortedByCases) {
			return (
				<List>
					{countriesData.sortedByCases.slice(0, topCount).map((data) => (
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
			);
		}

		return null;
	};

	const renderTopFiveDeathsCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (countriesData && countriesData.sortedByDeaths) {
			return (
				<List>
					{countriesData.sortedByDeaths.slice(0, topCount).map((data) => (
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
			);
		}

		return null;
	};

	const renderTopFiveRecoversCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (countriesData && countriesData.sortedByRecovers) {
			return (
				<List>
					{countriesData.sortedByRecovers.slice(0, topCount).map((data) => (
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
			);
		}

		return null;
	};

	return (
		<div className="flex-auto overflow-y-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 py-12 px-16 text-center">
				<Card header="Infected">
					{{
						renderCount: renderGlobalConfirmedCases,
						renderList: renderTopFiveConfirmedCountries,
					}}
				</Card>

				<Card header="Deaths">
					{{
						renderCount: renderGlobalDeathsCases,
						renderList: renderTopFiveDeathsCountries,
					}}
				</Card>

				<Card header="Recovered">
					{{
						renderCount: renderGlobalRecoveredCases,
						renderList: renderTopFiveRecoversCountries,
					}}
				</Card>
			</div>
		</div>
	);
};

export default TotalsDashboard;
