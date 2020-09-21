import { buildUrl, objectToQueryParameters } from '../utils';

const API_BASE_URL = 'https://dataservice.accuweather.com';

export const client = ({ apiKey }) => ({
	service,
	headers = {},
	parameters,
}) => {
	const finalUrl = buildUrl({
		url: API_BASE_URL,
		path: service,
		query: objectToQueryParameters({
			...parameters,
			apikey: apiKey,
		}),
	});

	return fetch(finalUrl, {
		method: 'GET',
		headers: {
			'Accept-Encoding': 'gzip, deflate',
			...headers,
		},
	}).then((response) => response.json());
};
