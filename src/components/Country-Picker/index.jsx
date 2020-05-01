import React, { useMemo } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { getAlphaComparer } from '../../utils/get-array-comparer';

const countriesAlphaComparer = getAlphaComparer({ accessor: (a) => a.name });

export const CountryPicker = React.memo(({ countries, selected, onSelect }) => {
	const sortedCountries = useMemo(() => (countries || []).slice().sort(countriesAlphaComparer), [countries]);

	return (
		<Autocomplete
			value={selected}
			onChange={(_, c) => onSelect(c)}
			options={sortedCountries}
			style={{ width: 300 }}
			autoHighlight
			blurOnSelect={true}
			getOptionLabel={(o) => o.name}
			renderOption={(o) => (
				<React.Fragment>
					<span className="mr-2">{o.iso2}</span>
					{o.name}
				</React.Fragment>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
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
});
