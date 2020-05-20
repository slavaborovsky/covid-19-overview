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

const GlobalDashboard = React.lazy(() => import('./pages/Dashboard'));
const CountryView = React.lazy(() => import('./pages/CountryView'));
const WorldView = React.lazy(() => import('./pages/WorldView'));
const UsaView = React.lazy(() => import('./pages/UsaView'));

const APP_SWR_CONFIG = {
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

				<SWRConfig value={APP_SWR_CONFIG}>
					<Switch location={location}>
						<Route exact path="/">
							<Redirect to={{ pathname: '/dashboard' }} />
						</Route>
						<Route path="/dashboard">
							<Suspense fallback={<Loader text="Loading dashboard..." />}>
								<GlobalDashboard />
							</Suspense>
						</Route>
						<Route path="/world">
							<Suspense fallback={<Loader text="Loading world data..." />}>
								<WorldView />
							</Suspense>
						</Route>
						<Route path="/usa">
							<Suspense fallback={<Loader text="Loading USA data..." />}>
								<UsaView />
							</Suspense>
						</Route>
						<Route path="/countries">
							<Suspense fallback={<Loader text="Loading countries..." />}>
								<CountryView />
							</Suspense>
						</Route>
						<Route path="*">
							<Loader text="Not Found..." />
						</Route>
					</Switch>
				</SWRConfig>

				<Footer />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
