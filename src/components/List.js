import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import MUIList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useListStyles = makeStyles(() => ({
	root: {
		lineHeight: '32px',
		fontWeight: 'bold',
	},
}));

const useIconStyles = makeStyles(() => ({
	root: {
		minWidth: '32px',
	},
}));

const useItemStyles = makeStyles(() => ({
	root: {
		borderRadius: '23px',
		'&:hover': {
			borderRadius: '23px',
		},
		fontSize: '13px',
		fontWeight: '500',
	},
}));

const useItemTextStyles = makeStyles(() => ({
	root: {
		fontWeight: '500',
	},
}));

export default function List({ items }) {
	const listSubClasses = useListStyles();
	const listItemClasses = useItemStyles();
	const listItemIconClasses = useIconStyles();
	const listItemTextClasses = useItemTextStyles();
	return (
		<Box px={4} pb={2} fontWeight='500'>
			<MUIList
				dense
				disablePadding
				subheader={
					<ListSubheader
						className={listSubClasses.root}
						component='div'
						id='nested-list-subheader'
					>
						SECTION
					</ListSubheader>
				}
			>
				{Array(items)
					.fill('')
					.map((_, i) => (
						<ListItem key={i} button dense className={listItemClasses.root}>
							<ListItemIcon className={listItemIconClasses.root}>
								<Box
									component='span'
									width='18px'
									height='18px'
									bgcolor='gray.400'
									borderRadius='5px'
								/>
							</ListItemIcon>
							<ListItemText
								primary='Subsection'
								primaryTypographyProps={{ style: { fontWeight: '500' } }}
							/>
						</ListItem>
					))}
			</MUIList>
		</Box>
	);
}

List.defaultProps = {
	items: 1,
};

List.propTypes = {
	items: PropTypes.string,
};
