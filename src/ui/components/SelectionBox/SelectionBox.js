import React, { useCallback } from 'react';

export const SelectionBox = ({ list, onSelect, className }) => {
	const onSelectMemoized = useCallback(
		(event) => {
			onSelect(list[event.target.dataset.index]);
		},
		[onSelect, list],
	);

	if (list.length === 0) {
		return null;
	}

	return (
		<div className={`panel ${className}`}>
			{list.map((item, index) => (
				<label
					key={item.label}
					className="panel-block is-active"
					data-index={index}
					onClick={onSelectMemoized}
				>
					{item.label}
				</label>
			))}
		</div>
	);
};
