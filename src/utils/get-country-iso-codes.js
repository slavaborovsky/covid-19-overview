import countries from 'i18n-iso-countries';
import coutryLookup from 'country-code-lookup';

export const getCountryIsoCodes = (country) => {
	let iso2 = null;
	let iso3 = null;
	const countryName = countries.getName(country, 'en');

	if (countryName) {
		iso2 = countries.getAlpha2Code(countryName, 'en');
		iso3 = countries.getAlpha3Code(countryName, 'en');
	} else {
		const lookup = coutryLookup.byCountry(country) || coutryLookup.byInternet(country) || coutryLookup.byFips(country);
		if (lookup) {
			iso2 = lookup.iso2;
			iso3 = lookup.iso3;
		}
	}

	return { iso2, iso3 };
};
