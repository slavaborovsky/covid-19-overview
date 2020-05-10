import React, { useState, useEffect } from 'react';

import { ThemeSelectorContext, CURRENT_THEME } from './theme-context';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(CURRENT_THEME);

	useEffect(() => {
		if (CURRENT_THEME === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
		window.localStorage.setItem('app-theme', CURRENT_THEME);
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			document.documentElement.removeAttribute('data-theme');
			setTheme('light');
			window.localStorage.setItem('app-theme', 'light');
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			setTheme('dark');
			window.localStorage.setItem('app-theme', 'dark');
		}
	};

	return <ThemeSelectorContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeSelectorContext.Provider>;
};
