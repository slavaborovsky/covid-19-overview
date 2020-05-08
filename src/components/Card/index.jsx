import React from 'react';
import classNames from 'classnames';

export const Card = ({ children, classes }) => {
	const { renderHeader, renderSubheader, renderCount, renderList } = children;
	return (
		<div className={classNames(classes, 'bg-card shadow-md text-center p-4 rounded-md')}>
			<h3 className="text-3xl text-on-card opacity-80">{renderHeader()}</h3>
			{renderSubheader && <h3 className="text-2xl text-on-card font-bold mb-2">{renderSubheader()}</h3>}
			{renderCount()}
			{renderList()}
		</div>
	);
};
