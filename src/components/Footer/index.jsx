import React from 'react';

export const Footer = () => {
	const currentDate = new Date();
	return (
		<footer className="bg-footer shadow-inner p-4 text-center font-semibold">
			<p className="text-base text-on-footer">Powered by Vyacheslav Borovsky, {currentDate.getFullYear()}</p>
		</footer>
	);
};
