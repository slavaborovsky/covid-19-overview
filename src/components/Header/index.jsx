import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ThemeSelectorContext } from '../../context/theme/theme-context';

import './styles.scss';

export const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeSelectorContext);

	const [menuEl, setMenuEl] = React.useState(null);

	const handleClick = (event) => {
		setMenuEl(event.currentTarget);
	};

	const handleClose = () => {
		setMenuEl(null);
	};

	return (
		<header className="app-header bg-header shadow-md w-full pl-16 pr-8 relative flex flex-row items-center">
			<Link to="/" className="text-lg md:text-xl lg:text-2xl text-on-header mr-8">
				COVID Tracker
			</Link>

			<div className="hidden align-middle md:flex app-header__navigation">
				<NavLink to="/dashboard" activeClassName="active">
					Dashboard
				</NavLink>

				<NavLink to="/world" activeClassName="active">
					World
				</NavLink>

				<NavLink to="/usa" activeClassName="active">
					USA
				</NavLink>

				<NavLink to="/countries" activeClassName="active">
					Countries
				</NavLink>
			</div>

			<div className="flex align-middle md:hidden">
				<IconButton aria-controls="navigation-menu" aria-haspopup="true" onClick={handleClick}>
					<ListIcon htmlColor={'var(--covid-nav-link)'} />
				</IconButton>
				<Menu id="simple-menu" anchorEl={menuEl} keepMounted open={Boolean(menuEl)} onClose={handleClose}>
					<MenuItem onClick={handleClose}>
						<NavLink to="/dashboard" activeClassName="active">
							Dashboard
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink to="/world" activeClassName="active">
							World
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink to="/usa" activeClassName="active">
							USA
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink to="/countries" activeClassName="active">
							Countries
						</NavLink>
					</MenuItem>
				</Menu>
			</div>

			<div className="flex items-center ml-auto">
				<WbSunnyIcon htmlColor={theme === 'dark' ? '' : 'var(--covid-active-theme-color)'} />
				<label className="inline-block relative h-6 w-12 font-bold mx-2" htmlFor="checkbox">
					<input
						type="checkbox"
						id="checkbox"
						checked={theme === 'dark'}
						className="themeSwitchCheckbox hidden"
						onChange={(e) => toggleTheme()}
					/>
					<div className="themeSwitchSlider bg-white inset-0 cursor-pointer absolute rounded-full transition-500"></div>
				</label>
				<Brightness3Icon htmlColor={theme === 'dark' ? 'var(--covid-active-theme-color)' : ''} />
			</div>
		</header>
	);
};
