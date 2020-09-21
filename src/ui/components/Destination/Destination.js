import React from 'react';
import { FlightComponent } from '../Flight';
import { WeatherListForecastComponent } from '../WeatherListForecast';
import './destination.css';

export const Destination = ({
	locationName,
	forecast,
	isLoadingForecast,
	flightList,
	isLoadingFlights,
	className = '',
}) => {
	const hasFoundFlights =
		!isLoadingFlights && flightList && flightList.length > 0;
	const hasNotFoundFlights =
		!isLoadingFlights && flightList && flightList.length === 0;

	return (
		<section className={`destination--wrapper ${className}`}>
			<h2>{locationName}</h2>
			<WeatherListForecastComponent
				forecast={forecast}
				isLoading={isLoadingForecast}
			/>
			{isLoadingFlights ? <p>Finding flights...</p> : null}
			{hasNotFoundFlights ? (
				<p className="box">No flights found for this destination.</p>
			) : null}
			{hasFoundFlights
				? /* prettier-ignore */
				  flightList.map((flight) => (
					<FlightComponent
						key={flight.id}
						flight={flight}
						isLoading={isLoadingFlights}
					/>
				))
				: null}
		</section>
	);
};
