import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

import { getCssPropertyValue } from '../../../utils/get-css-property-value';
import getColorsInRange from '../../../utils/color/get-colors-in-range';
import parseColorString from '../../../utils/color/parse-color-string';

function getScaleColors(color1, color2) {
	const color1Parsed = parseColorString(color1);
	const color2Parsed = parseColorString(color2);
	return getColorsInRange(color1Parsed, color2Parsed, 16).map((color) =>
		color.reduce((out, c) => `${out}${c.toString(16)}`, '#')
	);
}
export const BaseMapChart = ({ data, projection, geography }) => {
	const [tooltipContent, setTooltipContent] = useState('');

	const themeProps = getCssPropertyValue([
		'error',
		'secondary',
		'default',
		'card-background',
		'chart-tooltip-background',
		'chart-tooltip-text',
	]);

	const colorScale = scaleQuantile()
		.domain((data || []).map((s) => s.cases))
		.range(getScaleColors(themeProps['card-background'], themeProps.error));

	const formatTooltip = (name, data) => {
		if (!data) {
			return `<p class="text-sm">Unknown for ${name}</p>`;
		}

		return `<p class="text-center text-base italic">${name}</p>
        <p>
            Cases - <b class="text-warning">${data.cases}</b>
        </p>
        <p>
            Deaths - <b class="text-error">${data.deaths || 'Unknown'}</b>
        </p>
        <p>
            Recovers - <b class="text-success">${data.recovered || 'Unknown'}</b>
        </p>`;
	};

	return (
		<React.Fragment>
			<div className="relative flex-auto">
				<div className="absolute inset-0">
					<ComposableMap
						projection={projection}
						data-tip=""
						style={{ width: '100%', height: '100%', overflow: 'hidden' }}
					>
						<ZoomableGroup>
							<Geographies geography={geography}>
								{({ geographies }) =>
									geographies.map((geo, i) => {
										const curr = data.find((s) => s.iso2 === geo.properties.iso_code);
										return (
											<Geography
												key={`${geo.properties.iso_code}-${i}`}
												geography={geo}
												style={{
													default: {
														stroke: themeProps.default,
														strokeWidth: 1,
														outline: 'none',
														fill: curr ? colorScale(curr.cases) : themeProps['card-background'],
													},
													hover: {
														stroke: themeProps.default,
														strokeWidth: 1.5,
														outline: 'none',
														fill: themeProps.default,
													},
												}}
												onMouseEnter={() => {
													const { name } = geo.properties;
													setTooltipContent(formatTooltip(name, curr));
												}}
												onMouseLeave={() => {
													setTooltipContent('');
												}}
												fill={curr ? colorScale(curr.cases) : themeProps['card-background']}
											/>
										);
									})
								}
							</Geographies>
						</ZoomableGroup>
					</ComposableMap>
				</div>
			</div>
			<ReactTooltip
				textColor={themeProps['chart-tooltip-text']}
				backgroundColor={themeProps['chart-tooltip-background']}
				html={true}
			>
				{tooltipContent}
			</ReactTooltip>
		</React.Fragment>
	);
};
export const MemoizedBaseMapChart = React.memo(BaseMapChart);
