import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'utils/theme';

import './App.css';

const Sidebar = lazy(() =>
	import(/* webpackChunkName: "Sidebar" */ 'components/Sidebar'),
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Suspense fallback={<div>{null}</div>}>
					<Switch>
						<Route path='/' component={Sidebar} />
					</Switch>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
}

export default App;
