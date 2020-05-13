import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { USADailyChart, USAMapChart } from '../../components';

function a11yProps(index) {
	return {
		id: `world-info-tab-${index}`,
		'aria-controls': `world-info-tabpanel-${index}`,
	};
}

const TabPanel = ({ children, index: tabIndex, value: activeTabIndex, ...rest }) => {
	const isActiveTab = tabIndex === activeTabIndex;
	const classes = classNames('flex-auto', isActiveTab ? 'flex flex-col' : null);
	return (
		<div
			className={classes}
			role="tabpanel"
			hidden={isActiveTab === false}
			id={`usa-info-tab-panel-${tabIndex}`}
			aria-labelledby={`usa-info-tab-${tabIndex}`}
			{...rest}
		>
			{isActiveTab && <React.Fragment>{children}</React.Fragment>}
		</div>
	);
};

const UsaView = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const tabsRef = useRef();

	const changeActiveTab = (_, nextIndex) => {
		setActiveTabIndex(nextIndex);
	};

	useEffect(() => {
		// fix tabs indicator does not reflect active position on lazy/suspense component loaded
		window.dispatchEvent(new CustomEvent('resize'));
		if (tabsRef.current) {
			tabsRef.current.updateIndicator();
		}
	}, [activeTabIndex]);

	return (
		<div className="flex flex-col flex-auto overflow-auto px-16 py-6">
			<div className="usa-tabs">
				<Tabs
					action={tabsRef}
					value={activeTabIndex}
					textColor="secondary"
					centered={true}
					onChange={changeActiveTab}
					aria-label="USA Covid-19 tabs"
				>
					<Tab label="Map View" {...a11yProps(0)} />
					<Tab label="History" {...a11yProps(1)} />
				</Tabs>
			</div>
			<TabPanel value={activeTabIndex} index={0}>
				<USAMapChart />
			</TabPanel>
			<TabPanel value={activeTabIndex} index={1}>
				<USADailyChart />
			</TabPanel>
		</div>
	);
};

export default UsaView;
