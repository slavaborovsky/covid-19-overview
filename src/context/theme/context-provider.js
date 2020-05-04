import React, { useState, useRef, useEffect } from 'react';

import { ThemeSelectorContext, CURRENT_THEME } from './theme-context';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(CURRENT_THEME);
	const rootRef = useRef();

	useEffect(() => {
		rootRef.current = document.getElementById('root');
		rootRef.current.classList = `covid-${CURRENT_THEME}-theme`;
		window.localStorage.setItem('app-theme', CURRENT_THEME);

		return () => {
			rootRef.current = undefined;
		};
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			rootRef.current.classList = 'covid-light-theme';
			setTheme('light');
			window.localStorage.setItem('app-theme', 'light');
		} else {
			rootRef.current.classList = 'covid-dark-theme';
			setTheme('dark');
			window.localStorage.setItem('app-theme', 'dark');
		}
	};

	return <ThemeSelectorContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeSelectorContext.Provider>;
};
