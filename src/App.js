import React, { useState, Suspense } from 'react';
import classNames from 'classnames';
import { SWRConfig } from 'swr';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header, Footer, Loader } from './components';
import { swrFetcher } from './utils/api';

import './App.scss';

const GlobalDashboard = React.lazy(() => import('./containers/TotalsDashboard'));

const DATA_REFRESH_INTERVAL = 1000 * 30;

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
		'grid',
		'grid-rows-main-layout'
	);

	const swrDashboardConfig = {
		refreshInterval: DATA_REFRESH_INTERVAL,
		fetcher: swrFetcher,
		suspense: true,
	};

	return (
		<Router>
			<div className={containerClassnames}>
				<Header onThemeChange={changeTheme} />
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route exact path="/">
							<Redirect to={{ pathname: '/dashboard' }} />
						</Route>
						<Route path="/dashboard">
							<SWRConfig value={swrDashboardConfig}>
								<GlobalDashboard />
							</SWRConfig>
						</Route>
						<Route path="*">
							<Loader />
						</Route>
					</Switch>
				</Suspense>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
