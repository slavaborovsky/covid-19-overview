import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import countries from 'i18n-iso-countries';
import EnglishTranslations from 'i18n-iso-countries/langs/en.json';

import { Header, Footer, Loader } from './components';
import { swrDashboardFetcher as swrFetcher } from './utils/api';
import { APP_THEME } from './utils/theme/create-theme';

import './App.scss';

countries.registerLocale(EnglishTranslations);

const GlobalDashboard = React.lazy(() => import('./pages/GlobalDashboard'));
const CountryView = React.lazy(() => import('./pages/CountryView'));

const GLOBAL_DASHBOARD_SWR_CONFIG = {
	refreshInterval: 1000 * 60, // 60 sec
	fetcher: swrFetcher,
	suspense: true,
};

const COUNTRY_INFO_SWR_CONFIG = {
	refreshInterval: 1000 * 60, // 60 sec
	fetcher: swrFetcher,
	suspense: true,
};

function App() {
	const location = useLocation();

	return (
		<MuiThemeProvider theme={APP_THEME}>
			<div className="bg-body font-body h-screen min-h-full flex flex-col">
				<Header />

				<Suspense fallback={<Loader text="Loading..." />}>
					<Switch location={location}>
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
							<Loader text="Not Found..." />
						</Route>
					</Switch>
				</Suspense>

				<Footer />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
