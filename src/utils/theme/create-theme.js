import { createMuiTheme } from '@material-ui/core/styles';

import { MUI_BUTTON_OVERRIDES, MUI_ICON_BUTTON_OVERRIDES, MUI_TAB_OVERRIDES } from './overrides';

export const APP_THEME = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(var(--mui-primary-rgb))',
			contrastText: 'rgb(var(--mui-on-primary-rgb))',
		},
		secondary: {
			main: 'rgb(var(--mui-secondary-rgb))',
			contrastText: 'rgb(var(--mui-on-secondary-rgb))',
		},
	},
	overrides: {
		MuiButton: MUI_BUTTON_OVERRIDES,
		MuiIconButton: MUI_ICON_BUTTON_OVERRIDES,
		MuiTab: MUI_TAB_OVERRIDES,
		MuiMenu: {
			list: {
				backgroundColor: 'var(--covid-menu-background)',
			},
		},
		MuiMenuItem: {
			root: {
				color: 'var(--covid-menu-item-color)',
			},
		},
	},
});
