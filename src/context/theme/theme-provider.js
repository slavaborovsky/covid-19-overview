import React, { useState, useEffect, useContext, createContext } from 'react';

import { getInitialTheme } from './get-initial-theme';

const INITIAL_THEME = getInitialTheme();

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(getInitialTheme(INITIAL_THEME));

	useEffect(() => {
		if (INITIAL_THEME === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
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

	return (
		<ThemeStateContext.Provider value={theme}>
			<ThemeDispatchContext.Provider value={toggleTheme}>{children}</ThemeDispatchContext.Provider>
		</ThemeStateContext.Provider>
	);
};

export function useThemeState() {
	const context = useContext(ThemeStateContext);
	if (context === undefined) {
		throw new Error('useThemeState must be used within ThemeProvider');
	}
	return context;
}

export function useThemeDispatch() {
	const context = useContext(ThemeDispatchContext);
	if (context === undefined) {
		throw new Error('useThemeDispatch must be used within ThemeProvider');
	}
	return context;
}

export function useTheme() {
	return [useThemeState(), useThemeDispatch()];
}
