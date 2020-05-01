import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = ({ onThemeChange }) => {
	return (
		<header className="app-header bg-header h-16 w-full px-20 border-b-2 border-on-primary flex flex-row items-center">
			<span className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-on-header mr-10">COVID-19</span>

			<div className="flex align-middle ml-4">
				<NavLink to="/dashboard" activeClassName="active">
					Dashboard
				</NavLink>

				<NavLink to="/countries" activeClassName="active">
					Countries
				</NavLink>
			</div>

			<div className="flex items-center ml-auto">
				<label className="inline-block relative h-8 w-16 font-bold" htmlFor="checkbox">
					<input
						type="checkbox"
						id="checkbox"
						className="themeSwitchCheckbox hidden"
						onChange={(e) => onThemeChange(e.target.checked)}
					/>
					<div className="themeSwitchSlider bg-white inset-0 cursor-pointer absolute rounded-full transition-500"></div>
				</label>
				<em className="ml-5 text-base text-on-header">Enable Dark Mode</em>
			</div>
		</header>
	);
};
