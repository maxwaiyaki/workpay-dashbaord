import React from 'react';
import PropTypes from 'prop-types';

import MUIModal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

export default function Modal({ isOpen, onClose, width }) {
	return (
		<MUIModal
			open={isOpen}
			onClose={onClose}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<Box
				top='50%'
				left='50%'
				style={{ transform: 'translate(-50%, -50%)' }}
				position='absolute'
				mx='auto'
				width={width}
				bgcolor='background.paper'
				padding={(2, 4, 3)}
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
