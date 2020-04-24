export const getNumericComparer = ({ accessor = (a) => a, desc = true } = {}) => {
	return (a, b) => {
		if (desc) {
			return accessor(b) - accessor(a);
		}

		return accessor(a) - accessor(b);
	};
};

export const getAlphaComparer = ({ accessor = (a) => a, locales, ...options } = {}) => {
	return (a, b) => accessor(a).localeCompare(accessor(b), locales, options);
};
