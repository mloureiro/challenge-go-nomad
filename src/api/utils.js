// @TODO support nested objects and arrays
export const objectToQueryParameters = (parameters) =>
	Object.keys(parameters)
		.map(
			(name) =>
				`${encodeURIComponent(name)}=${encodeURIComponent(parameters[name])}`,
		)
		.join('&');

export const buildUrl = ({ url, path, query }) => {
	const querySeparator = path.indexOf('?') === -1 ? '?' : '';
	const urlSeparator = path.indexOf('/') === 0 ? '' : '/';

	return `${url}${urlSeparator}${path}${querySeparator}${query}`;
};
