import React from 'react';

import './styles.scss';

export const Footer = () => {
	const currentDate = new Date();
	return (
		<footer className="app-footer bg-footer flex justify-center text-center">
			<p className="text-sm text-on-footer my-auto">Powered by Vyacheslav Borovsky, {currentDate.getFullYear()}</p>
		</footer>
	);
};
