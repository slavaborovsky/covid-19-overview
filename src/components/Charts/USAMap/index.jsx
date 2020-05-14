import React from 'react';
import useSwr from 'swr';

import { geoCentroid } from 'd3-geo';
import { Marker, Annotation } from 'react-simple-maps';
import { getUSASpreadingData } from '../../../utils/api';

import { MemoizedBaseMapChart } from '../BaseMapChart';

import USAJson from './USA.json';

const offsets = {
	VT: [50, -8],
	NH: [34, 2],
	MA: [30, -1],
	RI: [28, 2],
	CT: [35, 10],
	NJ: [34, 1],
	DE: [33, 0],
	MD: [47, 10],
	DC: [49, 21],
};

const connectorLineStyles = {
	stroke: 'var(--covid-default)',
	strokeWidth: 2,
	strokeLinecap: 'round',
};

export const USAMapChart = () => {
	const { data, error } = useSwr('usaSpreadingData', getUSASpreadingData);

	const renderStateAnnotation = (geographies) => {
		return geographies.map((geo, i) => {
			const centroid = geoCentroid(geo);
			const cur = (data || []).find((item) => item.iso2 === geo.properties.iso_code);
			return (
				<g key={`${geo.properties.iso_code}-${i}`}>
					{cur &&
						centroid[0] > -160 &&
						centroid[0] < -67 &&
						(Object.keys(offsets).includes(cur.iso2) ? (
							<Annotation
								subject={centroid}
								connectorProps={connectorLineStyles}
								dx={offsets[cur.iso2][0]}
								dy={offsets[cur.iso2][1]}
							>
								<text x={4} fill="var(--covid-default)" fontSize={13} alignmentBaseline="middle">
									{cur.iso2}
								</text>
							</Annotation>
						) : (
							<Marker coordinates={centroid}>
								<text y="2" fill="var(--covid-map-text)" fontSize={13} textAnchor="middle">
									{cur.iso2}
								</text>
							</Marker>
						))}
				</g>
			);
		});
	};

	if (error) {
		return <h2 className="text-default text-xl my-auto text-center">Error loading USA virus spreading data</h2>;
	}

	return (
		<MemoizedBaseMapChart
			projection="geoAlbersUsa"
			data={data}
			geography={USAJson}
			renderMarker={renderStateAnnotation}
		/>
	);
};
