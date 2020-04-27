import React, { useState } from 'react';
import classNames from 'classnames';
import CountUp from 'react-countup';

import { Card, Header, Footer, Loader } from './components';
import { fetchTotalData, fetchCountiresData } from './utils/api';
import { getNumericComparer } from './utils/get-array-comparer';
import { useInterval } from './utils/custom-hooks';

import './App.scss';

const confirmedCasesComparer = getNumericComparer({ accessor: (data) => data.cases });
const deathsCasesComparer = getNumericComparer({ accessor: (data) => data.deaths });
const recoveredCasesComparer = getNumericComparer({ accessor: (data) => data.recovered });

const COUNTIRES_TO_EXCLUDE = ['world', 'total', 'total:', 'europe', 'north america', 'south america', 'asia', 'africa'];

export const TotalsDashboard = () => {
	const [theme, setTheme] = useState('light');
	const [isLoading, setLoading] = useState(true);
	const [totals, setTotals] = useState({
		cases: 0,
		deaths: 0,
		recovered: 0,
	});
	const [topConfirmedCountriesData, setTopConfirmedData] = useState([]);
	const [topDeathsCountriesData, setTopDeathsData] = useState([]);
	const [topRecoveredCountriesData, setTopRecovered] = useState([]);

	const [updatedAt, setUpdatedDate] = useState(new Date());
	const [refreshInterval, setRefreshInterval] = useState(0);

	useInterval(() => {
		const callFetchPageData = async () => {
			setLoading(true);

			setUpdatedDate(new Date());

			const [totalData, countriesData] = await Promise.all([fetchTotalData(), fetchCountiresData()]);
			const filteredCountriesData = countriesData.filter(
				({ country }) => !COUNTIRES_TO_EXCLUDE.includes(country.toLowerCase())
			);
			const topConfirmedData = filteredCountriesData.sort(confirmedCasesComparer).slice(0, 10);
			const topDeathsData = filteredCountriesData.sort(deathsCasesComparer).slice(0, 10);
			const topRecoveredData = filteredCountriesData.sort(recoveredCasesComparer).slice(0, 10);

			setTotals(totalData);

			setTopConfirmedData(topConfirmedData);
			setTopDeathsData(topDeathsData);
			setTopRecovered(topRecoveredData);

			if (refreshInterval === 0) {
				setRefreshInterval(10000);
			}
			setLoading(false);
		};

		callFetchPageData();
	}, refreshInterval);

	const changeTheme = (isDark) => {
		const nextTheme = isDark ? 'dark' : 'light';
		setTheme(nextTheme);
	};

	const containerClassnames = classNames(
		`covid-${theme}-theme`,
		'bg-body',
		'font-body',
		'h-screen',
		'grid',
		'grid-rows-main-layout'
	);

	const confirmedCasesList = topConfirmedCountriesData.map((data, index) => {
		return (
			<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
				<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
				<span className="text-base text-alert">Cases: {data.cases}</span>
				<span className="mx-2 text-default">|</span>
				<span className="text-base text-alert">Today: {data.todayCases}</span>
			</div>
		);
	});

	const deathCasesList = topDeathsCountriesData.map((data, index) => {
		return (
			<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
				<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
				<span className="text-base text-error">Deaths: {data.deaths}</span>
				<span className="mx-2 text-default">|</span>
				<span className="text-base text-error">Today: {data.todayDeaths}</span>
			</div>
		);
	});

	const recoveredCasesList = topRecoveredCountriesData.map((data, index) => {
		return (
			<div className="border shadow-inner border-primary-300 px-4 py-2" key={data.country}>
				<h4 className="text-2xl text-default cursor-pointer hover:underline hover:font-semibold">{data.country}</h4>
				<span className="text-base text-info">Recovered: {data.recovered}</span>
				<span className="mx-2 text-default">|</span>
				<span className="text-base text-error">Critical: {data.critical}</span>
			</div>
		);
	});

	return (
		<div className={containerClassnames}>
			<Header onThemeChange={changeTheme} />

			<div className="main-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-8 md:col-gap-16 row-gap-12 md:row-gap-16 lg:col-gap-24 xl:col-gap-32 px-12 py-8 overflow-auto text-center">
				<Card isDataLoading={isLoading} updatedAt={updatedAt}>
					{{
						header: 'Global',
						subheader: 'Cases',
						renderLoader: <Loader />,
						renderCount: (
							<p className="text-alert text-2xl">
								<CountUp start={0} end={totals.cases} duration={1.5} separator="," />
							</p>
						),
						renderList: confirmedCasesList,
					}}
				</Card>

				<Card isDataLoading={isLoading} updatedAt={updatedAt}>
					{{
						header: 'Global',
						subheader: 'Deaths',
						renderLoader: <Loader />,
						renderCount: (
							<p className="text-error text-2xl">
								<CountUp start={0} end={totals.deaths} duration={1.5} separator="," />
							</p>
						),
						renderList: deathCasesList,
					}}
				</Card>

				<Card isDataLoading={isLoading} updatedAt={updatedAt}>
					{{
						header: 'Global',
						subheader: 'Recovered',
						renderLoader: <Loader />,
						renderCount: (
							<p className="text-info text-2xl">
								<CountUp start={0} end={totals.recovered} duration={1.5} separator="," />
							</p>
						),
						renderList: recoveredCasesList,
					}}
				</Card>
			</div>

			<Footer updatedDate={updatedAt} />
		</div>
	);
};
