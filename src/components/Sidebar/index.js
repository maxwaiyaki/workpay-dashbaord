import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import List from 'components/List';
import Avatar from '@material-ui/core/Avatar';

const data = {
	name: 'Africom Incorporated',
};

export default function Sidebar() {
	return (
		<Box
			component='aside'
			width={294}
			height='100vh'
			position='fixed'
			left='0'
			pt={3}
			bgcolor='white'
			color='gray.400'
		>
			<Box lineHeight='0.4' px={4}>
				<Box component='h2' fontWeight='bold' fontSize={18}>
					{data.name}
				</Box>
				<Box
					component='h4'
					fontSize={12}
					color='black'
					fontWeight='fontWeightMedium'
				>
					powered by WorkPay
				</Box>
			</Box>

			<Link to='/'>
				<Box
					padding='8px 16px'
					margin='36px 23px 24px 23px'
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
				bottom='0'
				width='100%'
				display='flex'
				fontWeight='fontWeightMedium'
				alignItems='center'
				borderTop={1}
				position='absolute'
				borderColor='grey.500'
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
	);
}
