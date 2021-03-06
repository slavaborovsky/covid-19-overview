import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { getCssPropertyValue } from '../../../utils/get-css-property-value';
import { useThemeState } from '../../../context/theme/theme-provider';

export const BaseLineChart = ({ data }) => {
	const theme = useThemeState();

	const themeProps = useMemo(() => {
		return getCssPropertyValue([
			'warning',
			'error',
			'success',
			'default',
			'chart-grid',
			'chart-tooltip-background',
			'chart-tooltip-text',
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	const datasets = [
		{
			data: data.map(({ confirmed }) => confirmed),
			label: 'Infected',
			borderColor: themeProps.warning,
			fill: false,
		},
		{
			data: data.map(({ deaths }) => deaths),
			label: 'Deaths',
			borderColor: themeProps.error,
			fill: false,
		},
	];

	if (data[0] && data[0].hasOwnProperty('recovered')) {
		datasets.push({
			data: data.map(({ recovered }) => recovered),
			label: 'Recovers',
			borderColor: themeProps.success,
			fill: false,
		});
	}

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
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
		layout: {
			padding: 10,
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
	};

	if (data && themeProps) {
		return (
			<Line
				data={{
					labels: data.map(({ date }) => date),
					datasets,
				}}
				options={chartOptions}
			/>
		);
	}

	return null;
};

export const MemoizedBaseLineChart = React.memo(BaseLineChart);
