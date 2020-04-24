import React from 'react';

export const Footer = ({ updatedDate }) => {
	return (
		<footer className="bg-footer shadow-inner p-4 text-center font-semibold">
			<p className="text-base text-on-footer">Powered by Vyacheslav Borovsky, {updatedDate.getFullYear()}</p>
		</footer>
	);
};
