import { createMuiTheme } from '@material-ui/core/styles';

export const APP_THEME = createMuiTheme({
	overrides: {
		MuiButton: {
			root: {
				background: 'var(--covid-primary)',
				border: 0,
				height: 40,
				minWidth: 64,
				padding: '8px 12px',
				boxShadow: 'var(--covid-btn-box-shadow)',
			},
			text: {
				background: 'var(--covid-primary)',
				color: 'var(--covid-on-primary)',
				'&:hover': {
					backgroundColor: 'var(--covid-primary)',
				},
			},
			textPrimary: {
				background: 'var(--covid-primary)',
				color: 'var(--covid-on-primary)',
				'&:hover': {
					backgroundColor: 'var(--covid-primary)',
				},
			},
			textSecondary: {
				background: 'var(--covid-secondary)',
				color: 'var(--covid-on-secondary)',
				'&:hover': {
					backgroundColor: 'var(--covid-secondary)',
				},
			},
		},
	},
});
