import React from 'react';
import PropTypes from 'prop-types';

import MUIModal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

export default function Modal({ isOpen, onClose, width, ...rest }) {
	return (
		<MUIModal
			open={isOpen}
			onClose={onClose}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<Box
				{...rest}
				mx='auto'
				top='50%'
				left='50%'
				width={width}
				position='absolute'
				padding='16px 32px 24px'
				bgcolor='background.paper'
				style={{ transform: 'translate(-50%, -50%)' }}
			/>
		</MUIModal>
	);
}

Modal.defaultProps = {
	width: '500px',
};

Modal.propTypes = {
	width: PropTypes.string,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};
