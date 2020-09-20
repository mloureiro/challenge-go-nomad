import { ACCU_WEATHER_API_KEY } from '../../.env.json';
import { client as baseClient } from './client';
import { findCity } from './findCity';
import { forecast } from './forecast';

export const weatherApi = () => {
	const client = baseClient({ apiKey: ACCU_WEATHER_API_KEY });

	return {
		findLocation: findCity(client),
		forecast: forecast(client),
	};
};
