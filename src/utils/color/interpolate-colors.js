/**
 * RGB color, each number is 0-255 representation of red, green, and blue, respectively
 * @typedef {number[]} Color
 */

/**
 * Find a color between two given colors.
 *
 * @param {Color} color1
 * @param {Color} color2
 * @param {number} [factor=0.5] - between 0 and 1,
 * @return {Color}
 */
export default function interpolateColor(color1, color2, factor = 0.5) {
	const result = color1.slice();
	for (let i = 0; i < 3; i += 1) {
		result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
	}
	return result;
}
