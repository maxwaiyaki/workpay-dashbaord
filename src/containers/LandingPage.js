import React from 'react';

import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { theme } from 'utils/theme';
import { useDateTime } from 'utils/hooks';
import { getDate, getDay, getMonth } from 'utils/moments';
import ChevronRight from 'assets/icons/ChevronRight';

const data = {
	name: 'Maxwell',
	subHeading:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
	steps: [
		{
			id: 'selectPackage',
			step: 'Select your package',
			isComplete: true,
		},
		{
			id: 'setCompany',
			step: 'Set your company',
			isComplete: false,
		},
		{
			id: 'setPayRoll',
			step: 'Setup payroll information',
			isComplete: false,
		},
		{
			id: 'setupEmployee',
			step: 'Employee setup',
			isComplete: false,
		},
		{
			id: 'testSystem',
			step: 'Test the system with your first process',
			isComplete: false,
			isLastStep: true,
			isActive: false,
		},
	],

	welcomeText: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur',
	],
};

const day = getDay(new Date());
const date = getDate(new Date());
const month = getMonth(new Date());

const GreenCheckbox = withStyles({
	root: {
		color: theme.palette.gray[400],
		'&$checked': {
			color: theme.palette.green[500],
		},
		'&:hover': {
			background: 'transparent',
		},
		// height: '48px',
		// width: '48px',
	},
	checked: {},
})((props) => <Checkbox disableRipple disabled color='default' {...props} />);

const RunPayroll = withStyles({
	root: {
		fontSize: '12px',
		marginLeft: 'auto',
	},
})(Button);

export default function LandingPage() {
	const dateTime = useDateTime();
	return (
		<Container>
			<Box component='section' paddingTop={6} pl={5} pr={16}>
				<Box
					component='header'
					fontSize='36px'
					fontWeight='bold'
					color='green.900'
				>{`${dateTime} ${data.name}.`}</Box>
				<Box display='flex' justifyContent='space-between'>
					<Box component='p' maxWidth='50%' color='common.black'>
						{data.subHeading}
					</Box>
					<Box
						component='p'
						color='gray.800'
						fontSize='fontSize'
					>{`${day}, ${date} ${month}`}</Box>
				</Box>
				<Box display='flex' justifyContent='space-between' marginTop={2}>
					<Box component='ul' flex='2'>
						{data.steps.map((item, i) => (
							<Box
								key={item.id}
								padding='12px 16px'
								component='li'
								border={1}
								display='flex'
								alignItems='center'
								borderColor='common.white'
								borderRadius='6px'
								marginBottom={2}
								bgcolor='background.paper'
								boxShadow='0px 3px 6px #9D9D9D29'
								style={{
									cursor: `${item.isActive === false ? 'default' : 'pointer'}`,
								}}
							>
								<GreenCheckbox
									value='checkedA'
									name='Checked A'
									checked={item.isComplete}
								/>
								<Box fontWeight='fontWeightMedium' paddingLeft={1}>
									<Box
										fontSize='12px'
										color={item.isActive === false ? 'gray.500' : 'gray.700'}
										letterSpacing='0'
										style={{ wordSpacing: '-0.5px' }}
									>{`Step ${i + 1} of ${data.steps.length}`}</Box>
									<Box
										color={item.isActive === false ? 'gray.500' : 'green.700'}
									>
										{item.step}
									</Box>
								</Box>
								{item.isLastStep ? (
									<RunPayroll
										disableElevation
										disabled={item.isActive === false}
										variant='contained'
									>
										Run Payroll
									</RunPayroll>
								) : (
									<ChevronRight
										color='gray.400'
										style={{ marginLeft: 'auto' }}
									/>
								)}
							</Box>
						))}
					</Box>
					<Box
						flex='1'
						bgcolor='background.paper'
						marginLeft={4}
						padding={4}
						height={240}
						borderRadius='6px'
						background='#FFFFFF 0% 0% no-repeat padding-box'
					>
						<Box
							fontWeight='fontWeightMedium'
							color='green.900'
							fontSize='20px'
						>
							Welcome to Workpay
						</Box>
						{data.welcomeText.map((item, i) => (
							<Box component='p' fontSize='13.2px' color='gray.900' key={i}>
								{item}
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
