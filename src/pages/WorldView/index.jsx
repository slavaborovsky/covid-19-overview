import React, { useState, useRef, Suspense } from 'react';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { GlobalDailyChart, WorldMapChart, Loader } from '../../components';

const a11yProps = (index) => ({
	id: `world-info-tab-${index}`,
	'aria-controls': `world-info-tabpanel-${index}`,
});

const TabPanel = ({ children, index: tabIndex, value: activeTabIndex, ...rest }) => {
	const isActiveTab = tabIndex === activeTabIndex;
	const classes = classNames('flex-auto', isActiveTab ? 'flex flex-col' : null);
	return (
		<div
			className={classes}
			role="tabpanel"
			hidden={isActiveTab === false}
			id={`world-info-tab-panel-${tabIndex}`}
			aria-labelledby={`world-info-tab-${tabIndex}`}
			{...rest}
		>
			{isActiveTab && <React.Fragment>{children}</React.Fragment>}
		</div>
	);
};

const WorldView = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const tabsRef = useRef();

	const changeActiveTab = (_, nextIndex) => {
		setActiveTabIndex(nextIndex);
	};

	return (
		<div className="flex flex-col flex-auto overflow-auto px-16 py-6">
			<div className="world-tabs flex justify-center">
				<Tabs
					action={tabsRef}
					value={activeTabIndex}
					textColor="primary"
					indicatorColor="primary"
					onChange={changeActiveTab}
					aria-label="World Covid-19 tabs"
				>
					<Tab label="Map" {...a11yProps(0)} />
					<Tab label="History" {...a11yProps(1)} />
				</Tabs>
			</div>
			<TabPanel value={activeTabIndex} index={0}>
				<Suspense fallback={<Loader text="Loading World map" />}>
					<WorldMapChart />
				</Suspense>
			</TabPanel>
			<TabPanel value={activeTabIndex} index={1}>
				<Suspense fallback={<Loader text="Loading World daily" />}>
					<GlobalDailyChart />
				</Suspense>
			</TabPanel>
		</div>
	);
};

export default WorldView;
