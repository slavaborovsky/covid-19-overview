module.exports = {
	theme: {
		fontFamily: {
			display: 'var(--font-display)',
			body: 'var(--font-body)',
		},
		extend: {
			colors: {
				default: 'var(--covid-default)',
				primary: {
					100: 'var(--covid-primary-100)',
					200: 'var(--covid-primary-200)',
					300: 'var(--covid-primary-300)',
					400: 'var(--covid-primary-400)',
					500: 'var(--covid-primary-500)',
					default: 'var(--covid-primary)',
				},
				secondary: {
					100: 'var(--covid-secondary-100)',
					200: 'var(--covid-secondary-200)',
					300: 'var(--covid-secondary-300)',
					400: 'var(--covid-secondary-400)',
					500: 'var(--covid-secondary-500)',
					default: 'var(--covid-secondary)',
				},
				info: 'var(--covid-info)',
				alert: 'var(--covid-alert)',
				error: 'var(--covid-error)',
				link: 'var(--covid-link)',
				'link-active': 'var(--covid-link-active)',
				'on-primary': 'var(--covid-on-primary)',
				'on-header': 'var(--covid-on-header)',
				'on-body': 'var(--covid-on-body)',
				'on-card': 'var(--covid-on-body)',
				'on-footer': 'var(--covid-on-footer)',
			},
			backgroundColor: {
				header: 'var(--covid-header-background)',
				body: 'var(--covid-body-background)',
				card: 'var(--covid-card-background)',
				footer: 'var(--covid-footer-background)',
			},
			gridTemplateRows: {
				'main-layout': 'auto 1fr auto',
			},
		},
		container: {
			center: true,
		},
		opacity: {
			'0': '0',
			'20': '0.2',
			'40': '0.4',
			'50': '0.5',
			'60': '0.6',
			'70': '0.7',
			'80': '0.8',
			'90': '0.9',
			'100': '1',
		},
	},
	variants: {},
	plugins: [],
};
