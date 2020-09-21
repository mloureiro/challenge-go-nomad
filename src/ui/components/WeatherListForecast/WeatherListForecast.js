import React from 'react';
import './weatherListForecast.css';
import { WeatherDayForecastComponent } from '../WeatherDayForecast';

const mapDate = (date) => date.replace(/^\d{4}.(\d{2}).(\d{2}).*$/, '$2/$1');

export const WeatherListForecast = ({ forecast, isLoading }) => {
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!forecast) {
		return (
			<p className="has-text-danger-dark is-bold">
				<span className="has-text-danger is-bold">Something failed</span>
				<span>(possibly hit API limits)</span>
			</p>
		);
	}

	if (forecast.length === 0) {
		return <p className="has-text-warning">Could not load forecast.</p>;
	}

	return (
		<table className="table weather-list-forecast--wrapper">
			<thead>
				<tr>
					{forecast.map((day) => (
						<th key={day.date}>
							<span className="weather-list-forecast--date">
								{mapDate(day.date)}
							</span>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					{forecast.map((day) => (
						<th key={day.date}>
							<WeatherDayForecastComponent
								min={day.min}
								max={day.max}
								unit={day.unit}
								img={day.img}
							/>
						</th>
					))}
				</tr>
			</tbody>
		</table>
	);
};
