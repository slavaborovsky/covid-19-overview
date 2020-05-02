import React from 'react';

export const Card = ({ header, subheader, children }) => {
	const { renderCount, renderList } = children;
	return (
		<div className="bg-card shadow-2xl text-center p-4 rounded-lg">
			<h3 className="text-3xl text-on-card opacity-80">{header}</h3>
			{subheader && <h3 className="text-2xl text-on-card font-bold mb-2">{subheader}</h3>}
			{renderCount()}
			{renderList()}
		</div>
	);
};
