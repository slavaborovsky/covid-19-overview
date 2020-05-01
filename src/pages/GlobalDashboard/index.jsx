import React from 'react';
import CountUp from 'react-countup';
import useSWR from 'swr';

import { Card, Loader } from '../../components';
import { useTopCountries } from '../../utils/custom-hooks';

const TotalsDashboard = () => {
	const { data: totalsData, error: totalsError } = useSWR('all');
	const { data: countriesData, updatedAt, error: countriesError } = useTopCountries();

	const globalDataError = <p className="text-error text-2xl">Global data error!</p>;

	const renderLastUpdateAt = (
		<p className="text-base opacity-60 text-default mb-4">
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
						<CountUp start={0} end={totalsData.cases} duration={1} separator="," />
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
						<CountUp start={0} end={totalsData.deaths} duration={1} separator="," />
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
						<CountUp start={0} end={totalsData.recovered} duration={1} separator="," />
					</p>
					{renderLastUpdateAt}
				</React.Fragment>
			);
		}

		return <p className="text-base text-on-card">Loading recovers...</p>;
	};

	const renderTopListError = <p className="text-error text-base">Top data list error!</p>;

	const renderTopFiveConfirmedCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (countriesData && countriesData.topConfirms) {
			return countriesData.topConfirms.map((data) => {
				return (
					<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
						<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
						<span className="text-base text-warning">Infected: {data.cases}</span>
						<span className="mx-2 text-default">|</span>
						<span className="text-base text-warning">Today: {data.todayCases}</span>
					</div>
				);
			});
		}

		return <Loader />;
	};

	const renderTopFiveDeathsCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (countriesData && countriesData.topDeaths) {
			return countriesData.topDeaths.map((data) => {
				return (
					<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
						<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
						<span className="text-base text-error">Deaths: {data.deaths}</span>
						<span className="mx-2 text-default">|</span>
						<span className="text-base text-error">Today: {data.todayDeaths}</span>
					</div>
				);
			});
		}

		return <Loader />;
	};

	const renderTopFiveRecoversCountries = () => {
		if (countriesError) {
			return renderTopListError;
		}

		if (countriesData && countriesData.topRecovers) {
			return countriesData.topRecovers.map((data) => {
				return (
					<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
						<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
						<span className="text-base text-success">Recovered: {data.recovered}</span>
						<span className="mx-2 text-default">|</span>
						<span className="text-base text-error">Critical: {data.critical}</span>
					</div>
				);
			});
		}

		return <Loader />;
	};

	return (
		<div className="totals-dashboard grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-8 md:col-gap-16 row-gap-12 md:row-gap-16 lg:col-gap-24 xl:col-gap-32 px-12 py-8 overflow-auto text-center">
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
	);
};

export default TotalsDashboard;