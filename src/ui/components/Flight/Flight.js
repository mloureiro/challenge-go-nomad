import React from 'react';
import { RouteComponent } from '../Route';
import './flight.css';

const mapCurrency = (currency = 'EUR') => {
	// @TODO cover other currencies
	/* prettier-ignore */
	switch (currency.toUpperCase()) {
	case 'EUR':
		return '€';
	case 'YEN':
		return '¥';
	case 'USD':
	default:
		return '$';
	}
};

const Price = ({ value, currency, className = '' }) => (
	<p className={`price ${className}`}>
		<span className="price--currency">{mapCurrency(currency)}</span>
		<span className="price--value">{value}</span>
	</p>
);

export const Flight = ({ flight }) => {
	return (
		<article className="flight--wrapper box">
			<main className="flight--content--wrapper columns is-mobile is-vcentered">
				<RouteComponent
					className="flight--main-route column is-mobile"
					departureDate={flight.dates.departure.utc}
					arrivalDate={flight.dates.arrival.utc}
					fromLocationName={flight.from.city.name}
					fromLocationCode={flight.from.city.code}
					toLocationName={flight.to.city.name}
					toLocationCode={flight.to.city.code}
					totalStops={flight.route.length - 1}
				/>
				<aside className="flight--main-side column">
					<Price
						className="has-text-primary-dark"
						currency={flight.price.currency}
						value={flight.price.value}
					/>
					<a
						className="flight--main-side--book button is-primary"
						href={flight.bookUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Book
					</a>
				</aside>
			</main>
			{flight.route && flight.route.length > 1 ? (
				<details className="flight--itinerary">
					<summary className="button is-small" />
					<div>
						{flight.route.map((route) => (
							<RouteComponent
								key={route.from.city.code}
								className="flight--single-route"
								departureDate={route.dates.departure.utc}
								arrivalDate={route.dates.arrival.utc}
								fromLocationName={route.from.city.name}
								fromLocationCode={route.from.city.code}
								toLocationName={route.to.city.name}
								toLocationCode={route.to.city.code}
								totalStops={null}
							/>
						))}
					</div>
				</details>
			) : null}
		</article>
	);
};
