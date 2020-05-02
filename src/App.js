import React, { useState, Suspense } from 'react';
import classNames from 'classnames';
import { SWRConfig } from 'swr';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import countries from 'i18n-iso-countries';
import EnglishTranslation from 'i18n-iso-countries/langs/en.json';

import { Header, Footer, Loader } from './components';
import { swrDashboardFetcher, swrCountryInfoFetcher } from './utils/api';
import { APP_THEME } from './utils/theme/create-theme';

import './App.scss';

countries.registerLocale(EnglishTranslation);

const GlobalDashboard = React.lazy(() => import('./pages/GlobalDashboard'));

const CountryView = React.lazy(() => import('./pages/CountryView'));

const GLOBAL_DASHBOARD_SWR_CONFIG = {
	refreshInterval: 1000 * 30, // 30 sec
	fetcher: swrDashboardFetcher,
	suspense: true,
};

const COUNTRY_INFO_SWR_CONFIG = {
	refreshInterval: 1000 * 60, // 60 sec
	fetcher: swrCountryInfoFetcher,
	suspense: true,
};

function App() {
	const [theme, setTheme] = useState('light');

	const changeTheme = (isDark) => {
		const nextTheme = isDark ? 'dark' : 'light';
		setTheme(nextTheme);
	};

	const containerClassnames = classNames(
		`covid-${theme}-theme`,
		'bg-body',
		'font-body',
		'h-screen',
		'min-h-full',
		'flex',
		'flex-col'
	);

	return (
		<ThemeProvider theme={APP_THEME}>
			<Router basename="/">
				<div className={containerClassnames}>
					<Header onThemeChange={changeTheme} />
					<Suspense fallback={<Loader />}>
						<Switch>
							<Route exact path="/">
								<Redirect to={{ pathname: '/dashboard' }} />
							</Route>
							<Route path="/dashboard">
								<SWRConfig value={GLOBAL_DASHBOARD_SWR_CONFIG}>
									<GlobalDashboard />
								</SWRConfig>
							</Route>
							<Route path="/countries">
								<SWRConfig value={COUNTRY_INFO_SWR_CONFIG}>
									<CountryView />
								</SWRConfig>
							</Route>
							<Route path="*">
								<h3>Not Found!</h3>
							</Route>
						</Switch>
					</Suspense>

					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
