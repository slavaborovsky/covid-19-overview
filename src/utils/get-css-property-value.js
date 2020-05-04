export const getCssPropertyValue = (keys, theme = 'light') => {
	const themeElement = document.querySelector(`.covid-${theme}-theme`);
	if (!themeElement) {
		return {};
	}

	const computedStyles = window.getComputedStyle(themeElement);
	return keys.reduce((out, key) => {
		const variable = `--covid-${key}`;

		out[key] = computedStyles.getPropertyValue(variable);
		return out;
	}, {});
};
