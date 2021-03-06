module.exports = {
	theme: {
		fontFamily: {
			display: 'var(--font-display)',
			body: 'var(--font-body)',
		},
		extend: {
			colors: {
				default: 'var(--covid-default)',
				primary: 'var(--covid-primary)',
				secondary: 'var(--covid-secondary)',
				success: 'var(--covid-success)',
				info: 'var(--covid-info)',
				warning: 'var(--covid-warning)',
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
				'main-layout': '50px 1fr 40px',
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
		boxShadow: {
			default: '0 1px 3px 0 var(--covid-box-shadow-color), 0 1px 2px 0 var(--covid-box-shadow-color)',
			md: '0 4px 6px -1px var(--covid-box-shadow-color), 0 2px 4px -1px var(--covid-box-shadow-color)',
			lg: '0 10px 15px -3px var(--covid-box-shadow-color), 0 4px 6px -2px var(--covid-box-shadow-color)',
			xl: '0 20px 25px -5px var(--covid-box-shadow-color), 0 10px 10px -5px var(--covid-box-shadow-color)',
			'2xl': '0 25px 50px -12px var(--covid-box-shadow-color)',
			'3xl': '0 35px 60px -15px var(--covid-box-shadow-color)',
			inner: 'inset 0 0 4px 0 var(--covid-box-shadow-color)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none',
		},
	},
	variants: {},
	plugins: [],
};
