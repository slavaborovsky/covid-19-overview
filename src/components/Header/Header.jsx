import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

export const Header = ({ onThemeChange }) => {
	return (
		<header className="bg-primary h-16 w-full px-20 border-b-2 border-on-primary flex flex-row justify-between items-center">
			<span className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-on-primary mr-10">COVID-19 Information</span>

			<div className="flex items-center">
				<label className="inline-block relative h-8 w-16" htmlFor="checkbox">
					<input
						type="checkbox"
						id="checkbox"
						className={classNames(styles.themeSwitchCheckbox, 'hidden')}
						onChange={(e) => onThemeChange(e.target.checked)}
					/>
					<div
						className={classNames(
							styles.themeSwitchSlider,
							'bg-card inset-0 cursor-pointer absolute rounded-full transition-500'
						)}
					></div>
				</label>
				<em className="ml-5 text-base text-on-primary">Enable Dark Mode</em>
			</div>
		</header>
	);
};
