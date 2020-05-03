import { createContext } from 'react';

export const CURRENT_THEME = window.localStorage.getItem('app-theme') || 'light';
export const ThemeSelectorContext = createContext({
	theme: CURRENT_THEME,
	toggleTheme: () => {},
});
