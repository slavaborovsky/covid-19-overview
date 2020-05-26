export function getInitialTheme() {
	let theme = 'light';

	if (window.localStorage.getItem('app-theme') !== undefined) {
		theme = window.localStorage.getItem('app-theme');
	}

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	const currentHour = new Date().getHours();
	if (currentHour <= 6 || currentHour >= 21) {
		theme = 'dark';
	}

	return theme;
}
