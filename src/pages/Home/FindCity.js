import React, { useCallback, useRef, useState } from 'react';
import { flightApi } from '../../api/flight';
import { SearchInputWithSelectionComponent } from '../../ui/components/SearchInputWithSelection';

const mapCityToSelection = (city) => ({
	node: city,
	label: `${city.cityName}, ${city.countryName}`,
});

export const FindCity = ({ onSelect }) => {
	const [locationList, setLocationList] = useState([]);
	const stateRef = useRef();

	const onSelectMemoized = useCallback(
		(item) => {
			onSelect(item.node);
			setLocationList([]);
		},
		[onSelect],
	);

	const onTermsChangeMemoized = useCallback((terms) => {
		stateRef.current = terms;

		flightApi()
			.findCity(terms)
			.then((cityList) => {
				if (terms !== stateRef.current) {
					// if the terms has changed in the meanwhile ignore results
					return;
				}

				setLocationList(cityList.map(mapCityToSelection));
			});
	}, []);

	return (
		<SearchInputWithSelectionComponent
			label="Where will you fly from..."
			rightIcon="search"
			onTermsChange={onTermsChangeMemoized}
			onSelectItem={onSelectMemoized}
			itemList={locationList}
		/>
	);
};
