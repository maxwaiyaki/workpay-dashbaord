import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Flex from 'components/Flex';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
	rounded: {
		borderRadius: '6px',
	},
}));

export default function Setup({ setUpText }) {
	const classes = useStyles();
	return (
		<Box display='flex' justifyContent='space-between' marginTop={2}>
			<Box
				flex='2'
				boxShadow='0px 3px 6px #9D9D9D29'
				borderRadius='6px'
				bgcolor='background.paper'
			>
				<Flex align='center' py={3} px={5}>
					<Avatar
						variant='rounded'
						sizes='40px'
						className={`${classes.small} ${classes.rounded}`}
					/>
					<Box width='100%' marginLeft={3} lineHeight='1.4'>
						<Flex color='green.500' align='center' justify='space-between'>
							<Box fontWeight='fontWeightMedium' fontSize='12px'>
								Company Name
							</Box>
							<Box fontWeight='fontWeightBold' fontSize='13px'>
								Edit
							</Box>
						</Flex>
						<Box fontSize='18px' fontWeight='fontWeightBold' color='green.900'>
							Africom Incorporated
						</Box>
						<Box
							color='green.900'
							fontSize='13px'
							fontWeight='fontWeightMedium'
						>
							Telecommunication
						</Box>
					</Box>
				</Flex>
				<Box borderTop='2px solid #F0F0F0' />
			</Box>
			<Box flex='1' marginLeft={4}>
				<Box
					padding={4}
					height={240}
					borderRadius='6px'
					bgcolor='background.paper'
				>
					<Box fontWeight='fontWeightMedium' color='green.900' fontSize='20px'>
						Setting up your company
					</Box>
					{Array.isArray(setUpText) ? (
						setUpText.map((item, i) => (
							<Box component='p' fontSize='13.2px' color='gray.900' key={i}>
								{item}
							</Box>
						))
					) : (
						<Box component='p' fontSize='13.2px' color='gray.900'>
							{setUpText}
						</Box>
					)}
				</Box>
				<Box />
			</Box>
		</Box>
	);
}
Setup.defaultProps = {
	setUpText: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur',
	],
};

Setup.propTypes = {
	setUpText: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
