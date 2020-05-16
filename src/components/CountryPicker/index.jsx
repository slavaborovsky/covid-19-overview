import React, { useMemo } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { getAlphaComparer } from '../../utils/get-array-comparer';
import { withStyles } from '@material-ui/core';

const countriesAlphaComparer = getAlphaComparer({ accessor: (a) => a.name });

const CustomTextField = withStyles({
	root: {
		'& label': {
			color: 'var(--covid-default)',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'var(--covid-default)',
			},
			'&:hover fieldset': {
				borderColor: 'var(--covid-primary)',
			},
			'& .MuiOutlinedInput-input': {
				color: 'var(--covid-default)',
			},

			'& .MuiIconButton-root': {
				color: 'var(--covid-default)',

				'&:hover': {
					backgroundColor: 'var(--mui-icon-hover)',
				},
			},
		},
	},
})(TextField);

const CustomAutoComplete = withStyles({
	root: {
		minWidth: 300,
	},
	popper: {
		backgroundColor: 'var(--covid-popper-background)',
		border: 'var(--covid-default)',
	},
	listbox: {
		backgroundColor: 'var(--covid-popper-background)',
	},
	option: {
		color: 'var(--covid-popper-item-color)',
	},
})(Autocomplete);

export const CountryPicker = ({ countries, selected, onSelect }) => {
	const sortedCountries = useMemo(() => (countries || []).slice().sort(countriesAlphaComparer), [countries]);

	return (
		<CustomAutoComplete
			value={selected}
			onChange={(_, c) => onSelect(c)}
			options={sortedCountries}
			autoHighlight
			blurOnSelect={true}
			getOptionLabel={(o) => o.name}
			renderOption={(o, { selected }) => (
				<React.Fragment>
					<span className={selected ? 'text-primary mr-2' : 'mr-2'}>({o.iso2})</span>
					<span className={selected ? 'text-primary' : null}>{o.name}</span>
				</React.Fragment>
			)}
			renderInput={(params) => (
				<CustomTextField
					{...params}
					color="primary"
					label="Select a country"
					variant="outlined"
					inputProps={{
						...params.inputProps,
						autoComplete: 'new-password',
					}}
				/>
			)}
		/>
	);
};
