import React from 'react';
import './route.css';

const padTime = (time) => time.toString().padStart(2, '0');

const dateToHuman = (date) => date.toDateString().replace(/\s?\d+$/, '');

const timeToHuman = (time) =>
	`${padTime(time.getHours())}:${padTime(time.getMinutes())}`;

const timeInBetweenInMilliseconds = (start, end) =>
	end.getTime() - start.getTime();

const millisecondsToHuman = (milliseconds) => {
	const minutes = Math.round(milliseconds / 1000 / 60);

	return `${Math.floor(minutes / 60)}h ${padTime(minutes % 60)}m`;
};

export const Route = ({
	departureDate,
	arrivalDate,
	fromLocationName,
	fromLocationCode,
	toLocationName,
	toLocationCode,
	totalStops = null,
	className = '',
}) => {
	const departureDateObject = new Date(departureDate);
	const arrivalDateObject = new Date(arrivalDate);

	const departureDateHuman = dateToHuman(departureDateObject);
	const arrivalDateHuman = dateToHuman(arrivalDateObject);
	const durationHuman = millisecondsToHuman(
		timeInBetweenInMilliseconds(departureDateObject, arrivalDateObject),
	);

	return (
		<ul className={`route--wrapper ${className}`}>
			<li>
				<span className="route--date--start">{departureDateHuman}</span>
			</li>
			<li className="route--departure">
				<span className="route--side-connection" />
				<span className="route--departure--time">
					{timeToHuman(departureDateObject)}
				</span>
				<span className="route--departure--location">{fromLocationName}</span>
				<span className="route--departure--location-code has-text-grey-light">
					({fromLocationCode})
				</span>
			</li>
			<li className="route--detail-tags">
				<span className="route--side-connection" />
				<span className="route--duration has-background-info has-text-light">
					{durationHuman}
				</span>
				{totalStops === 0 ? (
					<span className="route--no-stops has-background-primary has-text-light">
						Direct
					</span>
				) : null}
				{totalStops > 0 ? (
					<span className="route--stops has-background-light">
						{totalStops} {totalStops === 1 ? 'stop' : 'stops'}
					</span>
				) : null}
			</li>
			<li className="route--arrival">
				<span className="route--side-connection" />
				<span className="route--arrival--time">
					{timeToHuman(arrivalDateObject)}
				</span>
				<span className="route--arrival--location">{toLocationName}</span>
				<span className="route--arrival--location-code has-text-grey-light">
					({toLocationCode})
				</span>
			</li>
			{departureDateHuman !== arrivalDateHuman ? (
				<li>
					<span className="route--date--start">{arrivalDateHuman}</span>
				</li>
			) : null}
		</ul>
	);
};
