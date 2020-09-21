import React, { useEffect, useState } from 'react';
import { flightApi } from '../../api/flight';
import { weatherApi } from '../../api/weather';
import { DestinationComponent } from '../../ui/components/Destination';

const mapForecastDayForComponent = (dayForecast) => ({
	date: dayForecast.date,
	min: dayForecast.temperature.min,
	max: dayForecast.temperature.max,
	img: {
		src: dayForecast.day.icon.src,
		alt: dayForecast.day.icon.alt,
	},
});

export const Destination = ({ fromLabel, fromCode, toCode, toWeatherId }) => {
	const [isLoadingForecast, setIsLoadingForecast] = useState(false);
	const [isFindingFlights, setIsFindingFlights] = useState(false);
	const [flightList, setFlightList] = useState(null);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setIsLoadingForecast(true);
		weatherApi()
			.forecast({ locationId: toWeatherId })
			.then((result) => setForecast(result.map(mapForecastDayForComponent)))
			.catch((error) => {
				// @TODO properly handle error
				console.error(error);
				setForecast([]);
			})
			.finally(() => setIsLoadingForecast(false));
	}, [toWeatherId]);

	useEffect(() => {
		if (!fromCode) {
			return;
		}
		const today = new Date();
		const fiveDaysLater = new Date();
		fiveDaysLater.setDate(fiveDaysLater.getDate() + 1);

		setIsFindingFlights(true);
		flightApi()
			.findFlight({
				fromCity: fromCode,
				toCity: toCode,
				fromDate: today,
				toDate: fiveDaysLater,
				limit: 3,
			})
			.then(setFlightList)
			.catch((error) => {
				// @TODO properly handle error
				console.error(error);
				setFlightList([]);
			})
			.finally(() => setIsFindingFlights(false));
	}, [fromCode, toCode]);

	return (
		<DestinationComponent
			locationName={fromLabel}
			isLoadingForecast={isLoadingForecast}
			forecast={forecast}
			isLoadingFlights={isFindingFlights}
			flightList={flightList}
		/>
	);
};
