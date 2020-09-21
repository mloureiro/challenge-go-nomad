import React, { useCallback } from 'react';

export const TextInput = ({
	label,
	isLoading,
	onChange,
	onClear,
	leftIcon,
	rightIcon,
	value,
}) => {
	const onChangeMemoized = useCallback(
		(event) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	const shouldShowClear = value && onClear;

	return (
		<div className="field">
			<p
				className={`control ${leftIcon ? 'has-icons-left' : ''} ${
					rightIcon ? 'has-icons-right' : ''
				} ${isLoading ? 'is-loading' : ''}`}
			>
				{leftIcon ? (
					<span className="icon is-small is-left">
						<i className={`fas fa-${leftIcon}`} aria-hidden="true" />
					</span>
				) : null}
				<input
					className="input"
					type="text"
					onChange={onChangeMemoized}
					placeholder={label}
					value={value}
				/>
				{shouldShowClear ? (
					<span
						className="icon is-small is-right"
						aria-label="clear"
						onClick={onClear}
					>
						<i className={`fas fa-times-circle`} aria-hidden="true" />
					</span>
				) : null}
				{!shouldShowClear && rightIcon ? (
					<span className="icon is-small is-right">
						<i className={`fas fa-${rightIcon}`} aria-hidden="true" />
					</span>
				) : null}
			</p>
		</div>
	);
};
