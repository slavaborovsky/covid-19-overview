import React from 'react';

import './Loader.scss';

export const Loader = ({ items = 12 }) => {
	return (
		<div className="loadio-spinner-container">
			<div className="loadio-spinner">
				{new Array(items).fill(0).map((_, index) => (
					<div className="bg-primary" key={index}></div>
				))}
			</div>
		</div>
	);
};
