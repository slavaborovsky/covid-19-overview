import parseHexColorString from './parse-hex-color-string';
import parseRgbaColorString from './parse-rgba-color-string';

const HEX_COLOR_REGEX = /^#?([A-Fa-f0-9]{3}){1,2}$/;
const RGBA_COLOR_REGEX = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;

/**
 * @param {string} color
 * @return {Color}
 */
export default function parseColorString(color) {
	const trimmedColor = color.trim();
	if (HEX_COLOR_REGEX.test(trimmedColor)) {
		return parseHexColorString(trimmedColor);
	}

	if (RGBA_COLOR_REGEX.test(trimmedColor)) {
		return parseRgbaColorString(trimmedColor);
	}

	throw new Error(`Unsupported color string: ${color}`);
}
