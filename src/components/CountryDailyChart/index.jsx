import React, { useState, useEffect, useContext } from 'react';
import useSWR from 'swr';
import { Line } from 'react-chartjs-2';

import { getCountriesDailyData } from '../../utils/api';
import { getCssPropertyValue } from '../../utils/get-css-property-value';
import { ThemeSelectorContext } from '../../context/theme/theme-context';

export const CountryDailyChart = ({ selected }) => {
	const { data: countriesDailyData, error } = useSWR('countriesDaily', getCountriesDailyData);

	const [selectedData, setSelectedData] = useState(null);

	const { theme } = useContext(ThemeSelectorContext);

	useEffect(() => {
		if (countriesDailyData && selected && countriesDailyData[selected.iso3]) {
			setSelectedData(countriesDailyData[selected.iso3]);
		}
	}, [countriesDailyData, selected]);

	const [themeProps, setThemeProps] = useState({});

	useEffect(() => {
		setThemeProps(
			getCssPropertyValue(
				['warning', 'error', 'success', 'default', 'chart-grid', 'chart-tooltip-background', 'chart-tooltip-text'],
				theme
			)
		);
	}, [theme]);

	return error ? (
		<p className="text-error text-2xl text-center">Error loading country daily data</p>
	) : (
		<div className="bg-card shadow-2xl rounded-lg flex flex-col justify-center max-w-full py-3">
			{selectedData ? (
				<Line
					data={{
						labels: selectedData.map(({ date }) => date),
						datasets: [
							{
								data: selectedData.map(({ confirmed }) => confirmed),
								label: 'Infected',
								borderColor: themeProps.warning,
								fill: false,
							},
							{
								data: selectedData.map(({ deaths }) => deaths),
								label: 'Deaths',
								borderColor: themeProps.error,
								fill: false,
							},
							{
								data: selectedData.map(({ recovered }) => recovered),
								label: 'Recovers',
								borderColor: themeProps.success,
								fill: false,
							},
						],
					}}
					options={{
						scales: {
							xAxes: [
								{
									ticks: {
										autoSkip: true,
										maxTicksLimit: 20,
										fontColor: themeProps.default,
									},
									gridLines: {
										color: themeProps['chart-grid'],
									},
								},
							],
							yAxes: [
								{
									ticks: {
										autoSkip: true,
										maxTicksLimit: 10,
										fontColor: themeProps.default,
										callback: (label) => Number(label).toLocaleString(),
									},
									gridLines: {
										color: themeProps['chart-grid'],
									},
								},
							],
						},
						legend: {
							labels: {
								fontColor: themeProps.default,
								fontSize: 14,
							},
						},
						tooltips: {
							backgroundColor: themeProps['chart-tooltip-background'],
							titleFontColor: themeProps['chart-tooltip-text'],
							bodyFontColor: themeProps['chart-tooltip-text'],
							footerFontColor: themeProps['chart-tooltip-text'],
							callbacks: {
								label: (tooltipItem) => tooltipItem.yLabel.toLocaleString(),
							},
						},
					}}
				/>
			) : (
				<p className="text-base italic text-default text-center my-auto mx-6">
					Please specify country in the dropdown menu.
				</p>
			)}
		</div>
	);
};
