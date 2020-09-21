import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<>
					{/* React Needs a node so keep the Fragments */}
					{children}
				</>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node.isRequired,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
