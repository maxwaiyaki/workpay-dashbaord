import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';

const headCells = [
	{
		id: 'employeeNo',
		label: 'Employee No',
	},
	{
		id: 'name',
		label: 'Name',
	},
	{
		id: 'phone',
		label: 'Phone Number',
	},
	{
		id: 'role',
		label: 'Role',
	},
	{
		id: 'status',
		label: 'Status',
	},
];

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

export default function Users() {
	return (
		<TableContainer>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell padding='checkbox'>
							<Checkbox value='checkedA' name='Checked A' />
						</TableCell>
						{headCells.map((cell) => (
							<TableCell key={cell.id}>{cell.label}</TableCell>
						))}
						<TableCell align='center'>
							<Button variant='contained' disableElevation>
								Add User
							</Button>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell padding='checkbox'>
							<Checkbox value='checkedA' name='Checked A' />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
