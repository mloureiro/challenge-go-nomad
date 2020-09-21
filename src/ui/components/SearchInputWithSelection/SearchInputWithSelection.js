import React, { Fragment, useCallback, useState } from 'react';
import { SelectionBoxComponent } from '../SelectionBox';
import { TextInputComponent } from '../TextInput';
import './searchInputWithSelection.css';

export const SearchInputWithSelection = ({
	onTermsChange,
	onSelectItem,
	itemList,
	label,
	rightIcon,
}) => {
	const [terms, setTerms] = useState('');

	const onTermsChangeMemoized = useCallback(
		(newTerms) => {
			onTermsChange(newTerms);
			setTerms(newTerms);
		},
		[onTermsChange],
	);

	const onSelectItemMemoized = useCallback(
		(item) => {
			onSelectItem(item);
			setTerms(item.label);
		},
		[onSelectItem],
	);

	return (
		<Fragment>
			<TextInputComponent
				label={label}
				rightIcon={rightIcon}
				onChange={onTermsChangeMemoized}
				value={terms}
			/>
			<SelectionBoxComponent
				className="search-input-with-selection--box"
				list={itemList}
				onSelect={onSelectItemMemoized}
			/>
		</Fragment>
	);
};
