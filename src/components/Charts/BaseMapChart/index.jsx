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
	if (!data) {
		return `<p class="text-sm">Unknown for ${name}</p>`;
	}

	return `<p class="text-center text-base italic">${name}</p>
	<p>
		Cases - <b class="text-warning">${data.cases ? data.cases.toLocaleString() : 'Unknown'}</b>
	</p>
	<p>
		Deaths - <b class="text-error">${data.deaths ? data.deaths.toLocaleString() : 'Unknown'}</b>
	</p>
	<p>
		Recovers - <b class="text-success">${data.recovered ? data.recovered.toLocaleString() : 'Unknown'}</b>
	</p>`;
};

export const BaseMapChart = ({ data, projection, geography, renderMarker }) => {
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
					const curr = data.find((item) => item.iso2 === geo.properties.iso_code);
					return (
						<Geography
							key={`${geo.properties.iso_code}-${i}`}
							geography={geo}
							style={{
								default: {
									stroke: 'var(--covid-default)',
									strokeWidth: 1,
									outline: 'none',
									fill: curr ? colorScale(curr.cases) : 'var(--covid-card-background)',
								},
								hover: {
									stroke: 'var(--covid-default)',
									strokeWidth: 1.5,
									outline: 'none',
								},
							}}
							onMouseEnter={() => {
								const { name } = geo.properties;
								setTooltipContent(formatTooltip(name, curr));
							}}
							onMouseLeave={() => {
								setTooltipContent('');
							}}
							fill={curr ? colorScale(curr.cases) : 'var(--covid-card-background)'}
						/>
					);
				})}
				{renderMarker && renderMarker(geographies)}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className="relative flex-auto">
				<div className="absolute inset-0">
					<ComposableMap projection={projection} data-tip="" style={mapContainerStyles}>
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
