const mapCity = (city) => ({
	id: city.id,
	code: city.code,
	relevancyRank: city.rank,
	cityName: city.name,
	countryName: city.country.name,
	countryCode: city.country.id,
});

export const findCity = (fetcher) => (terms) =>
	fetcher({
		service: '/locations',
		parameters: {
			term: terms,
			location_types: 'city',
		},
	}).then(({ locations }) => locations.map(mapCity));
