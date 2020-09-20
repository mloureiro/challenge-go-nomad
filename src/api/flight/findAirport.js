const mapAirport = (airport) => ({
	id: airport.id,
	code: airport.code,
	relevancyRank: airport.rank,
	name: airport.name,
	cityName: airport.city.name,
	countryName: airport.city.country.name,
	countryCode: airport.city.country.id,
});

export const findAirport = (fetcher) => (terms) =>
	fetcher({
		service: '/locations',
		parameters: {
			term: terms,
			location_types: 'airport',
		},
	}).then(({ locations }) => locations.map(mapAirport));
