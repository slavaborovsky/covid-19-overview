import React, { useState } from 'react';

import { ThemeSelectorContext, CURRENT_THEME } from './theme-context';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(CURRENT_THEME);

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return <ThemeSelectorContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeSelectorContext.Provider>;
};
