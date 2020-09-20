const SERVICE_PATH = '/locations/v1/cities/search';

const cityMapper = (city) => ({
	id: city.Key,
	relevancyRank: city.Rank,
	name: city.LocalizedName,
	country: city.Country.LocalizedName,
	countryCode: city.Country.ID,
});

export const findCity = (fetcher) => (terms) =>
	fetcher({
		service: SERVICE_PATH,
		parameters: {
			q: terms,
		},
	}).then((list) => {
		if (!Array.isArray(list)) {
			throw Error('Response content is not an array');
		}

		return list.map(cityMapper);
	});
