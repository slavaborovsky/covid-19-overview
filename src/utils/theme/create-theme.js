import { createMuiTheme } from '@material-ui/core/styles';

import { MUI_BUTTON_OVERRIDES } from './overrides';

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
	},
});
