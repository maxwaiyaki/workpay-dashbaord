import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.gray[400],
	},
}));

export default function ChevronRight(props) {
	const classes = useStyles();
	return (
		<SvgIcon className={classes.root} {...props}>
			<path
				fillRule='evenodd'
				d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
			/>
		</SvgIcon>
	);
}
