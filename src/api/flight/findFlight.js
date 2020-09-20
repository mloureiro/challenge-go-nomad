const mapFlightDates = (flight) => ({
	dates: {
		durationInSeconds: flight.aTimeUTC - flight.dTimeUTC,
		departure: {
			utc: new Date(flight.dTimeUTC * 1000),
			local: new Date(flight.dTime * 1000),
		},
		arrival: {
			utc: new Date(flight.aTimeUTC * 1000),
			local: new Date(flight.aTime * 1000),
		},
	},
});

const mapFrom = (flight) => ({
	from: {
		code: flight.flyFrom,
		city: {
			code: flight.cityCodeFrom,
			name: flight.cityFrom,
		},
		// { code, name } for the main flight, empty for routes
		country: flight.countryFrom,
	},
});

const mapTo = (flight) => ({
	to: {
		code: flight.flyTo,
		city: {
			code: flight.cityCodeTo,
			name: flight.cityTo,
		},
		// { code, name } for the main flight, empty for routes
		country: flight.countryTo, // { code, name }
	},
});

const mapRouteFlightDetails = (route) => {
	if (!route.flight_no) return null;

	return {
		number: route.flight_no,
		carrier: route.airline,
	};
};

const mapRoute = (route) => ({
	...mapFlightDates(route),
	...mapFrom(route),
	...mapTo(route),
	vehicleType: route.vehicle_type,
	flight: mapRouteFlightDetails(route),
});

const mapFlight = (currency) => (flight) => ({
	id: flight.id,
	price: {
		// @TODO handle conversions
		value: flight.price,
		currency,
	},
	bookUrl: flight.deep_link,
	seatsAvailable: flight.availability.seats,
	...mapFlightDates(flight),
	...mapFrom(flight),
	...mapTo(flight),
	route: flight.route.map(mapRoute),
});

const formatDate = (date) => {
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
};

export const findFlight = (fetcher) => ({
	fromCity,
	toCity,
	fromDate, // JS date object
	currency = 'EUR', // currency code: EUR, USD, GBP, ...
	limit = 10,
	sort = 'price', // price, duration
	maxJumps = 5, // max jumps "stop overs"
}) =>
	fetcher({
		service: '/flights',
		parameters: {
			partner: 'picky',
			fly_to: toCity,
			fly_from: fromCity,
			to_type: 'city',
			flyFrom_type: 'city',
			date_from: formatDate(fromDate),
			curr: currency,
			limit,
			sort,
			max_stopovers: maxJumps,
			// @TODO check multiple dates:
			//   `fly_days=[0,1,2,3,4,5,6]&fly_days_type=departure`
		},
	}).then(({ data }) => data.map(mapFlight(currency)));
