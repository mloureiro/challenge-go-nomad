import { iconList } from './iconList';

const forecastMapper = (day) => ({
	date: day.Date,
	temperature: {
		min: day.Temperature.Minimum.Value,
		max: day.Temperature.Maximum.Value,
		unit: day.Temperature.Unit,
	},
	day: {
		phrase: day.Day.IconPhrase,
		icon: iconList[day.Day.Icon],
	},
	night: {
		phrase: day.Night.IconPhrase,
		icon: iconList[day.Night.Icon],
	},
});

export const forecast = (fetcher) => ({
	locationId,
	unit = 'c', // 'c' for Celsius or 'f' Fahrenheit
}) =>
	fetcher({
		service: `/forecasts/v1/daily/5day/${locationId
			.toString()
			.replace(/[^\d]/g, '')}`,
		parameters: {
			metric: unit === 'c' ? 'true' : 'false',
		},
	}).then((content) => content.DailyForecasts.map(forecastMapper));
