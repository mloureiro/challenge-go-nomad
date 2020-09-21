import React, { Fragment } from 'react';
import './headerWithDynamicContentBlocks.css';

export const HeaderWithDynamicContentBlocks = ({ title, children }) => {
	const [heading, ...content] = children;

	return (
		<Fragment>
			<header className="header-with-dynamic-content-blocks--header">
				<h1 className="is-size-3">{title}</h1>
				{heading}
			</header>
			<section className="header-with-dynamic-content-blocks--content-wrapper">
				{content}
			</section>
		</Fragment>
	);
};
