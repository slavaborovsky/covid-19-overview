import React from 'react';

import styles from './styles.module.scss';

export const Loader = ({ text }) => {
	return (
		<div className="flex-auto flex flex-col justify-center items-center">
			<svg
				xmlnssvg="http://www.w3.org/2000/svg"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.0"
				width="150px"
				height="150px"
				viewBox="0 0 128 128"
				xmlSpace="preserve"
			>
				<g transform="rotate(196.66 64 64)">
					<linearGradient id="linear-gradient">
						<stop offset="0%" className={styles.gradientColor} fillOpacity="1" />
						<stop offset="100%" className={styles.gradientPrimaryColor} fillOpacity="0.56" />
					</linearGradient>
					<linearGradient id="linear-gradient2">
						<stop offset="0%" className={styles.gradientColor} fillOpacity="1" />
						<stop offset="100%" className={styles.gradientSecondaryColor} fillOpacity="0.19" />
					</linearGradient>
					<path
						d="M64 .98A63.02 63.02 0 1 1 .98 64 63.02 63.02 0 0 1 64 .98zm0 15.76A47.26 47.26 0 1 1 16.74 64 47.26 47.26 0 0 1 64 16.74z"
						fillRule="evenodd"
						fill="url(#linear-gradient)"
					/>
					<path
						d="M64.12 125.54A61.54 61.54 0 1 1 125.66 64a61.54 61.54 0 0 1-61.54 61.54zm0-121.1A59.57 59.57 0 1 0 123.7 64 59.57 59.57 0 0 0 64.1 4.43zM64 115.56a51.7 51.7 0 1 1 51.7-51.7 51.7 51.7 0 0 1-51.7 51.7zM64 14.4a49.48 49.48 0 1 0 49.48 49.48A49.48 49.48 0 0 0 64 14.4z"
						fillRule="evenodd"
						fill="url(#linear-gradient2)"
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 64 64"
						to="360 64 64"
						dur="500ms"
						repeatCount="indefinite"
					/>
				</g>
			</svg>
			{text && <p className="text-default text-center text-2xl mt-3">{text}</p>}
		</div>
	);
};
