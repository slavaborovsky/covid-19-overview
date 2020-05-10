export const getCssPropertyValue = (keys) => {
	const computedStyles = window.getComputedStyle(document.documentElement);
	return keys.reduce((out, key) => {
		const variable = `--covid-${key}`;
		out[key] = computedStyles.getPropertyValue(variable);
		return out;
	}, {});
};
