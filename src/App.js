import React from 'react';
import { SWRConfig } from 'swr';

import { TotalsDashboard } from './containers';
import { swrFetcher } from './utils/api';

const DATA_REFRESH_INTERVAL = 1000 * 15;

function App() {
	const swrDashboardConfig = {
		refreshInterval: DATA_REFRESH_INTERVAL,
		fetcher: swrFetcher,
	};

	return (
		<SWRConfig value={swrDashboardConfig}>
			<TotalsDashboard />
		</SWRConfig>
	);
}

export default App;
