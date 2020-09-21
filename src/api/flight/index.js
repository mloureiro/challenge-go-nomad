import { createSingleton } from '../utils';
import { client as baseClient } from './client';
import { findAirport } from './findAirport';
import { findCity } from './findCity';
import { findFlight } from './findFlight';

export const flightApi = createSingleton(() => {
	const client = baseClient();

	return {
		findAirport: findAirport(client),
		findCity: findCity(client),
		findFlight: findFlight(client),
	};
});
