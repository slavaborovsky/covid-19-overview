/**
 * Convert HEX color into RBG representation
 * @param {String} hexColor
 * @return {Color}
 */
export default function parseHexColorString(hexColor) {
	let cleanHEX = hexColor.replace('#', '');

	if (cleanHEX.length === 3) {
		// expand shortened version it to the full form
		cleanHEX = cleanHEX.replace(/./g, '$&$&');
	}

	return cleanHEX.match(/\w\w/g).map((pair) => parseInt(pair, 16));
}
