import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ThemeSelectorContext } from '../../context/theme/theme-context';

import './styles.scss';

export const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeSelectorContext);

	return (
		<header className="app-header bg-header shadow-md w-full px-16 relative flex flex-row items-center">
			<Link to="/" className="text-lg md:text-xl lg:text-2xl text-on-header mr-8">
				COVID-19
			</Link>

			<div className="flex align-middle app-header__navigation">
				<NavLink to="/dashboard" activeClassName="active">
					Dashboard
				</NavLink>

				<NavLink to="/countries" activeClassName="active">
					Countries
				</NavLink>
			</div>

			<div className="flex items-center ml-auto">
				<label className="inline-block relative h-6 w-12 font-bold" htmlFor="checkbox">
					<input
						type="checkbox"
						id="checkbox"
						checked={theme === 'dark'}
						className="themeSwitchCheckbox hidden"
						onChange={(e) => toggleTheme()}
					/>
					<div className="themeSwitchSlider bg-white inset-0 cursor-pointer absolute rounded-full transition-500"></div>
				</label>
				<em className="ml-5 text-sm text-on-header">Enable Dark Mode</em>
			</div>
		</header>
	);
};
