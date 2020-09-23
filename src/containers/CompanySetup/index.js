import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from 'components/TabPanel';

import { getDate, getDay, getMonth } from 'utils/moments';
import Setup from './Setup';
import Users from './Users';

const data = {
	subHeading:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

const day = getDay(new Date());
const date = getDate(new Date());
const month = getMonth(new Date());

const SetupTabs = withStyles({
	root: {
		borderBottom: '1px solid #9F9F9F',
	},
	indicator: {
		backgroundColor: '#0B3B0B',
		height: '2px',
		zIndex: '1',
	},
})(Tabs);

const SetupTab = withStyles((theme) => ({
	root: {
		textTransform: 'none',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		color: '#9F9F9F',
		marginRight: theme.spacing(4),
		'&$selected': {
			color: '#0B3B0B',
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			color: '#0B3B0B',
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function CompanySetup() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<Box component='section' py={6} pl={5} pr={16}>
				<Box
					component='header'
					fontSize='20px'
					fontWeight='bold'
					color='green.900'
				>
					Company Setup
				</Box>
				<Box display='flex' justifyContent='space-between'>
					<Box
						component='p'
						marginTop='0.5em'
						maxWidth='50%'
						color='common.black'
					>
						{data.subHeading}
					</Box>
					<Box
						component='p'
						color='gray.800'
						fontSize='fontSize'
					>{`${day}, ${date} ${month}`}</Box>
				</Box>
				<Box
					width='100%'
					flex='1 1 auto'
					display='inline-block'
					position='relative'
					overflow='hidden'
					whiteSpace='nowrap'
				>
					<SetupTabs
						value={value}
						onChange={handleChange}
						aria-label='Setup example'
					>
						<SetupTab label='Your Company' />
						<SetupTab label='Users' />
						<SetupTab label='Package & Settings' />
					</SetupTabs>
				</Box>
				<TabPanel value={value} index={1}>
					<Setup />
				</TabPanel>
				<TabPanel value={value} index={0}>
					<Users />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Packages & Settings
				</TabPanel>
			</Box>
		</Container>
	);
}
