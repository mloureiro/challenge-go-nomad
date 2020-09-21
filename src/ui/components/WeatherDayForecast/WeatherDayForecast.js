import React from 'react';
import './weatherDayForecast.css';

const mapUnit = (unit) => {
	if (!unit || unit.toString().toLowerCase() === 'c') return 'ºC';

	return 'ºF';
};

export const WeatherDayForecast = ({ min, max, unit: unitType, img }) => {
	const unit = mapUnit(unitType);

	return (
		<div className="weather-day-forecast--wrapper">
			<img
				className="weather-day-forecast--image"
				src={img.src}
				alt={img.alt}
			/>
			<div className="weather-day-forecast--temperature--wrapper">
				<span className="weather-day-forecast--temperature temperature-low">
					{Math.round(min)}
					<sup>{unit}</sup>
				</span>
				<span className="weather-day-forecast--temperature temperature-high">
					{Math.round(max)}
					<sup>{unit}</sup>
				</span>
			</div>
		</div>
	);
};
