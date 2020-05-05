import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';

import { getCssPropertyValue } from '../../../utils/get-css-property-value';
import { ThemeSelectorContext } from '../../../context/theme/theme-context';

export const BaseLineChart = ({ data }) => {
	const { theme } = useContext(ThemeSelectorContext);

	const themeProps = getCssPropertyValue(
		['warning', 'error', 'success', 'default', 'chart-grid', 'chart-tooltip-background', 'chart-tooltip-text'],
		theme
	);

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
		maintainAspectRatio: true,
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
