import React, { useState, useMemo, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

import { getCssPropertyValue } from '../../../utils/get-css-property-value';
import getColorsInRange from '../../../utils/color/get-colors-in-range';
import parseColorString from '../../../utils/color/parse-color-string';
import { ThemeSelectorContext } from '../../../context/theme/theme-context';

function getScaleColors(startColorKey, endColorKey) {
	const themeProps = getCssPropertyValue([startColorKey, endColorKey]);
	const startColorParsed = parseColorString(themeProps[startColorKey]);
	const endColorParsed = parseColorString(themeProps[endColorKey]);
	return getColorsInRange(startColorParsed, endColorParsed, 16).map((color) =>
		color.reduce((out, c) => `${out}${c.toString(16)}`, '#')
	);
}

const mapContainerStyles = { width: '100%', height: '100%', overflow: 'hidden' };

const formatTooltip = (name, data) => {
	let content = `<p class="text-center text-base italic">${name}</p>`;

	if (!data) {
		return content;
	}

	if (data.cases !== null && !Number.isNaN(Number(data.cases))) {
		content += `<p>Cases - <b class="text-warning">${data.cases.toLocaleString()}</b></p>`;
	}

	if (data.deaths !== null && !Number.isNaN(Number(data.deaths))) {
		content += `<p>Deaths - <b class="text-error">${data.deaths.toLocaleString()}</b></p>`;
	}

	if (data.recovered !== null && !Number.isNaN(Number(data.recovered))) {
		content += `<p>Recovered - <b class="text-success">${data.recovered.toLocaleString()}</b></p>`;
	}

	return content;
};

export const BaseMapChart = ({ data, projection = 'geoEqualEarth', geography, clickHandler, renderMarker }) => {
	const [tooltipContent, setTooltipContent] = useState('');
	const { theme } = useContext(ThemeSelectorContext);

	const colorScale = useMemo(
		() =>
			scaleQuantile()
				.domain((data || []).map((s) => s.cases))
				.range(getScaleColors('card-background', 'error')),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[data, theme]
	);

	const renderItem = (geographies) => {
		return (
			<React.Fragment>
				{geographies.map((geo, i) => {
					const country = data.find((item) => item.iso2 === geo.properties.iso_code);
					return (
						<Geography
							key={`${geo.properties.iso_code}-${i}`}
							geography={geo}
							style={{
								default: {
									stroke: 'var(--covid-default)',
									strokeWidth: 1,
									outline: 'none',
								},
								hover: {
									stroke: 'var(--covid-default)',
									strokeWidth: 1.5,
									outline: 'none',
									cursor: 'pointer',
								},
							}}
							onClick={() => {
								clickHandler && clickHandler(country);
							}}
							onMouseEnter={() => {
								const { name } = geo.properties;
								setTooltipContent(formatTooltip(name, country));
							}}
							onMouseLeave={() => {
								setTooltipContent('');
							}}
							fill={country ? colorScale(country.cases) : 'var(--covid-card-background)'}
						/>
					);
				})}
				{renderMarker && renderMarker(geographies)}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className="relative flex-auto bg-card shadow-md rounded-md">
				<div className="absolute inset-0">
					<ComposableMap projection={projection} style={mapContainerStyles} data-tip="">
						<ZoomableGroup>
							<Geographies geography={geography}>{({ geographies }) => renderItem(geographies)}</Geographies>
						</ZoomableGroup>
					</ComposableMap>
				</div>
			</div>
			<ReactTooltip
				textColor={'var(--covid-chart-tooltip-text)'}
				backgroundColor={'var(--covid-chart-tooltip-background)'}
				html={true}
			>
				{tooltipContent}
			</ReactTooltip>
		</React.Fragment>
	);
};
export const MemoizedBaseMapChart = React.memo(BaseMapChart);
