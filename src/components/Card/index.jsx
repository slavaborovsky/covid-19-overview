import React from 'react';

export const Card = ({ isDataLoading, updatedAt, children }) => {
	const { header, subheader, renderLoader, renderCount, renderList } = children;
	return (
		<div className="bg-card shadow-2xl text-center p-4 rounded-lg">
			<h3 className="text-3xl text-on-card opacity-80">{header}</h3>
			<h3 className="text-2xl text-on-card font-bold mb-2">{subheader}</h3>
			{isDataLoading && renderLoader}
			{!isDataLoading && (
				<React.Fragment>
					{renderCount}
					<p className="text-base opacity-60 text-default mb-4">
						Last update: {updatedAt.toLocaleTimeString()} {updatedAt.toLocaleDateString()}
					</p>
					{renderList}
				</React.Fragment>
			)}
			{!isDataLoading && renderList}
		</div>
	);
};
