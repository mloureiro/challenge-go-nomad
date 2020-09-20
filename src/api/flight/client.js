import { buildUrl, objectToQueryParameters } from '../utils';

const API_BASE_URL = 'https://api.skypicker.com';

export const client = () => ({ service, parameters = {}, headers = {} }) => {
	const finalUrl = buildUrl({
		url: API_BASE_URL,
		path: service,
		query: objectToQueryParameters(parameters),
	});

	return fetch(finalUrl, {
		method: 'GET',
		headers: {
			'Accept-Encoding': 'gzip, deflate',
			...headers,
		},
	}).then((response) => response.json());
};
