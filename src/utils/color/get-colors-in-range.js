import interpolateColors from './interpolate-colors';

/**
 * Generate n colors between color1 and color2, including 1 and 2
 *
 * @param {Color} color1
 * @param {Color} color2
 * @param {number} n - how many colors to generate in the range
 * @return {Color[]}
 */
export default function getColorsInRange(color1, color2, n) {
	if (n === 1) {
		// avoid divide by zero
		return [color1];
	}

	const colors = [];
	for (let i = 0; i < n; i += 1) {
		colors.push(interpolateColors(color1, color2, i / (n - 1)));
	}

	return colors;
}
