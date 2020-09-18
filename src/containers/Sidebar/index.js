import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import List from 'components/List';
import Routes from 'containers/Routes';

const data = {
	name: 'Africom Incorporated',
};

export default function Sidebar() {
	return (
		<Box
			component='section'
			display='flex'
			flexDirection='column'
			flex='auto'
			minHeight='100vh'
		>
			<Box
				pt={3}
				left='0'
				width={294}
				height='100vh'
				flex='0 0 294px'
				minWidth={294}
				display='flex'
				flexDirection='column'
				bgcolor='background.paper'
				position='fixed'
				component='aside'
				overflow='hidden auto'
				color='gray.400'
			>
				<Box lineHeight='1.6' px={4}>
					<Box component='h2' m='0' fontWeight='bold' fontSize={18}>
						{data.name}
					</Box>
					<Box
						m='0'
						component='h4'
						fontSize={12}
						color='common.black'
						fontWeight='fontWeightMedium'
					>
						powered by WorkPay
					</Box>
				</Box>

				<Link to='/'>
					<Box
						padding='8px 16px'
						margin='24px 23px'
						borderRadius='23px'
						bgcolor='green.50'
						color='green.400'
						fontWeight='500'
						display='flex'
						alignItems='center'
						cursor='pointer'
					>
						<Box
							component='span'
							width='18px'
							height='18px'
							bgcolor='green.500'
							borderRadius='5px'
							mr={2}
						/>
						Dashbaord
					</Box>
				</Link>

				<List items={3} />
				<List items={4} />
				<List items={2} />

				<Box
					px={4}
					py={2}
					width='100%'
					display='flex'
					borderTop={1.5}
					marginTop='auto'
					borderColor='gray.200'
					fontWeight='fontWeightMedium'
					alignItems='center'
				>
					<Avatar>M</Avatar>
					<Box ml={2}>
						<Box m={0} component='h4'>
							Maxwell Waiyaki
						</Box>
						<Box m={0} component='h6'>
							Admin
						</Box>
					</Box>
				</Box>
			</Box>
			<Box component='main' flex='auto' marginLeft='294px' bgcolor='gray.50'>
				<Routes />
			</Box>
		</Box>
	);
}
