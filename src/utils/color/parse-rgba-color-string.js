const RGBA_COLOR_REGEX = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;

/**
 * Convert HEX color into RBG representation
 * @param {String} color
 * @return {Color}
 */
export default function parseRgbaColorString(color) {
	const [_, r, g, b] = color.match(RGBA_COLOR_REGEX);
	return [Number(r), Number(g), Number(b)];
}
