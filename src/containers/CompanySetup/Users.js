import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MUITableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import MUITableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import TablePagination from '@material-ui/core/TablePagination';
// import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MUICheckbox from '@material-ui/core/Checkbox';

import DotMenu from 'assets/icons/DotMenu';

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

const rows = [
	{
		employeeNo: '01-04-6789',
		name: 'Maxwell Waiyaki',
		phoneNo: '+254 721 515 912',
		role: 'Human Resource',
		status: 'Active',
	},
	{
		employeeNo: '01-04-6790',
		name: 'Reynolds Mungai',
		phoneNo: '+254 721 515 161',
		role: 'Product Design',
		status: 'Active',
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
		fontSize: '12px',
	},
}))(MUIButton);

const TableCell = withStyles((theme) => ({
	root: {
		borderBottomColor: 'transparent',
	},
	head: {
		color: theme.palette.green[900],
		fontWeight: 'fontWeightMedium',
	},
	body: {
		color: theme.palette.gray[1300],
		fontWeight: '500',
	},
}))(MUITableCell);

const TableRow = withStyles((theme) => ({
	root: {
		boxShadow: `0px 3px 6px ${theme.palette.gray[400]}`,
		backgroundColor: 'white',
		borderRadius: '6px !important',
		border: '1px solid white',
	},
	selected: {
		background: '#ECF7EC !important',
	},
}))(MUITableRow);

const Checkbox = withStyles(({ palette }) => ({
	root: {
		color: palette.gray[400],
		'&$checked': {
			color: palette.green[500],
		},
		'&:hover': {
			background: ` ${palette.green[50]} !important`,
		},
	},
	checked: {},
	icon: {
		borderRadius: '60px',
	},
}))((props) => <MUICheckbox disableRipple {...props} />);

// const Button = withStyles((theme) => ({
// 	root: {
// 		backgroundColor: theme.palette.green[500],
// 		color: 'white',
// 		fontWeight: 'normal',
// 		'&:hover': {
// 			backgroundColor: theme.palette.green[500],
// 		},
// 		fontSize: '13px',
// 	},
// }))(MUIButton);

export default function Users() {
	const [selected, setSelected] = React.useState([]);

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};
	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<TableContainer>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell padding='checkbox'>
							<Checkbox
								indeterminate={
									selected.length > 0 && selected.length < rows.length
								}
								checked={rows.length > 0 && selected.length === rows.length}
								onChange={handleSelectAllClick}
								inputProps={{ 'aria-label': 'select all employees' }}
							/>
						</TableCell>
						{headCells.map((cell, i) => (
							<TableCell
								padding={i === 0 ? 'none' : 'default'}
								align='center'
								key={cell.id}
							>
								{cell.label}
							</TableCell>
						))}
						<TableCell align='center'>
							<Button variant='contained' disableElevation>
								Add User
							</Button>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => {
						const isItemSelected = isSelected(row.name);
						const labelId = `users-table-checkbox-${row.employeeNo}`;
						return (
							<TableRow
								key={row.employeeNo}
								aria-checked={isItemSelected}
								tabIndex={-1}
								selected={isItemSelected}
							>
								<TableCell padding='checkbox'>
									<Checkbox
										checked={isItemSelected}
										onChange={(event) => handleClick(event, row.name)}
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								</TableCell>
								<TableCell padding='none' align='center'>
									{row.employeeNo}
								</TableCell>
								<TableCell align='center' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='center'>{row.phoneNo}</TableCell>
								<TableCell align='center'>{row.role}</TableCell>
								<TableCell align='center'>
									<Box
										borderRadius='20px'
										bgcolor={isItemSelected ? 'white' : 'green.100'}
										fontSize='13px'
										padding='4px'
										fontWeight='fontWeightMedium'
										color='green.900'
									>
										{row.status}
									</Box>
								</TableCell>
								<TableCell align='center'>
									<DotMenu fontSize='small' />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
