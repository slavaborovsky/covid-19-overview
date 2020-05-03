export const getCssPropertyValue = (keys, theme = 'light') => {
	const computedStyles = window.getComputedStyle(document.querySelector(`.covid-${theme}-theme`));
	return keys.reduce((out, key) => {
		const variable = `--covid-${key}`;

		out[key] = computedStyles.getPropertyValue(variable);
		return out;
	}, {});
};
