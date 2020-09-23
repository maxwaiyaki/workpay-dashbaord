import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MUIButton from '@material-ui/core/Button';

import Flex from 'components/Flex';

const useStyles = makeStyles((theme) => ({
	root: {
		// '& > *': {
		// 	margin: theme.spacing(1),
		// },
		padding: '24px 48px',
		borderTop: '2px solid #F0F0F0',
	},
	small: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
	rounded: {
		borderRadius: '6px',
	},

	input: {
		borderRadius: '6px',
		padding: '4px 16px',
		fontSize: '13.5px',
		fontWeight: '500',
		border: '1px solid #F8F8F8',
		boxShadow: '0px 3px 6px #9D9D9D29',
		backgroundColor: theme.palette.gray[1100],
	},
}));

const Button = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.green[500],
		color: 'white',
		fontWeight: 'normal',
		'&:hover': {
			backgroundColor: theme.palette.green[500],
		},
		fontSize: '13px',
	},
}))(MUIButton);

const formData = [
	{
		id: 'nhif',
		value: '',
		error: '',
		name: 'NHIF Number',
	},
	{
		id: 'nssf',
		value: '',
		error: '',
		name: 'NSSF Number',
	},
	{
		id: 'postalCode',
		value: '',
		error: '',
		name: 'Postal Code',
	},
	{
		id: 'pBox',
		value: '',
		error: '',
		name: 'P.O Box',
	},
	{
		id: 'city',
		value: '',
		error: '',
		name: 'City',
	},
	{
		id: 'address',
		value: '',
		error: '',
		name: 'Physical Address',
	},
];

export default function Setup({ setUpText }) {
	const classes = useStyles();
	return (
		<Box display='flex' justifyContent='space-between' marginTop={2}>
			<Box
				flex='1.6'
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
				<form autoComplete='off' className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<FormControl fullWidth required>
								<Box
									marginBottom={1}
									fontSize='12px'
									color='gray.1200'
									component='label'
									fontWeight='fontWeightMedium'
								>
									KRA PIN
								</Box>
								<InputBase fullWidth className={classes.input} />
							</FormControl>
						</Grid>
						{formData.map((item) => (
							<Grid item xs={6}>
								<FormControl fullWidth required key={item.id}>
									<Box
										marginBottom={1}
										fontSize='12px'
										color='gray.1200'
										component='label'
										fontWeight='fontWeightMedium'
									>
										{item.name}
									</Box>
									<InputBase fullWidth className={classes.input} />
								</FormControl>
							</Grid>
						))}
						<Grid item xs={3}>
							<Button variant='contained' fullWidth disableElevation>
								Save
							</Button>
						</Grid>
					</Grid>
				</form>
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
