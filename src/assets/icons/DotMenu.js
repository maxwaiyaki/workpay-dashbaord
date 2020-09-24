import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		// color: theme.palette.gray[400],
	},
}));

export default function DotMenu(props) {
	const classes = useStyles();
	return (
		<SvgIcon className={classes.root} {...props}>
			<path
				fillRule='evenodd'
				d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
			/>
		</SvgIcon>
	);
}
