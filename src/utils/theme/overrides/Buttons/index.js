export const MUI_BUTTON_OVERRIDES = {
	root: {
		border: 0,
		height: 40,
		minWidth: 64,
		padding: '8px 12px',
		boxShadow: 'var(--covid-btn-box-shadow)',
	},
	text: {
		backgroundColor: 'var(--covid-primary)',
		color: 'var(--covid-on-primary)',
		'&:hover': {
			color: 'var(--covid-primary)',
			backgroundColor: 'var(--covid-on-primary)',
			border: '1px solid var(--covid-primary)',
		},
	},
	textPrimary: {
		backgroundColor: 'var(--covid-primary)',
		color: 'var(--covid-on-primary)',
		'&:hover': {
			color: 'var(--covid-primary)',
			backgroundColor: 'var(--covid-on-primary)',
			border: '1px solid var(--covid-primary)',
		},
	},
	textSecondary: {
		backgroundColor: 'var(--covid-secondary)',
		color: 'var(--covid-on-secondary)',
		'&:hover': {
			color: 'var(--covid-secondary)',
			backgroundColor: 'var(--covid-on-secondary)',
			border: '1px solid var(--covid-secondary)',
		},
	},
	outlined: {
		color: 'var(--covid-primary)',
	},
	contained: {
		backgroundColor: 'var(--covid-primary)',
		color: 'var(--covid-on-primary)',
		'&:hover': {
			color: 'var(--covid-primary)',
			backgroundColor: 'var(--covid-on-primary)',
			border: '1px solid var(--covid-primary)',
		},
	},
	containedPrimary: {
		'&:hover': {
			color: 'var(--covid-primary)',
			backgroundColor: 'var(--covid-on-primary)',
			border: '1px solid var(--covid-primary)',
		},
	},
	containedSecondary: {
		'&:hover': {
			color: 'var(--covid-secondary)',
			backgroundColor: 'var(--covid-on-secondary)',
			border: '1px solid var(--covid-secondary)',
		},
	},
};

export const MUI_ICON_BUTTON_OVERRIDES = {
	root: {
		color: 'var(--covid-default)',
	},
};
