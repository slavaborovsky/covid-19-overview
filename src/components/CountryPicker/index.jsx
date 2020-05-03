import React, { useMemo } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { getAlphaComparer } from '../../utils/get-array-comparer';
import { withStyles } from '@material-ui/core';

const countriesAlphaComparer = getAlphaComparer({ accessor: (a) => a.name });

const CustomTetxField = withStyles({
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

export const CountryPicker = ({ countries, selected, onSelect }) => {
	const sortedCountries = useMemo(() => (countries || []).slice().sort(countriesAlphaComparer), [countries]);

	return (
		<Autocomplete
			value={selected}
			onChange={(_, c) => onSelect(c)}
			options={sortedCountries}
			style={{ minWidth: 300 }}
			autoHighlight
			blurOnSelect={true}
			getOptionLabel={(o) => o.name}
			renderOption={(o) => (
				<React.Fragment>
					<span className="mr-2">{o.iso2}</span>
					<span className="text-info">{o.name}</span>
				</React.Fragment>
			)}
			renderInput={(params) => (
				<CustomTetxField
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
