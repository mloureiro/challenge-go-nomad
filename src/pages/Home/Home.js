import React, { useState } from 'react';
import { HeaderWithDynamicContentBlocksTemplate } from '../../ui/templates/HeaderWithDynamicContentBlocks';
import { Destination } from './Destination';
import { FindCity } from './FindCity';

// @TODO ideally this shouldn't be hardcoded, but allow the user to
// choose whichever cities they want
const targetCities = [
	{
		label: 'Amsterdam, Netherlands',
		flightLocationCode: 'AMS',
		weatherLocationId: 249758,
	},
	{
		label: 'Budapest, Hungary',
		flightLocationCode: 'BUD',
		weatherLocationId: 187423,
	},
	{
		label: 'Madrid, Spain',
		flightLocationCode: 'MAD',
		weatherLocationId: 308526,
	},
];

export const Home = () => {
	const [origin, setOrigin] = useState(null);

	return (
		<HeaderWithDynamicContentBlocksTemplate title="Go Nomad">
			<FindCity onSelect={setOrigin} />
			{targetCities.map((city) => (
				<Destination
					key={city.label}
					fromLabel={city.label}
					fromCode={origin ? origin.code : null}
					toCode={city.flightLocationCode}
					toWeatherId={city.weatherLocationId}
				/>
			))}
		</HeaderWithDynamicContentBlocksTemplate>
	);
};
