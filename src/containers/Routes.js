import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LandingPage = lazy(() =>
	import(/* webpackChunkName: "LandingPage" */ 'containers/LandingPage'),
);
const CompanySetup = lazy(() =>
	import(/* webpackChunkName: "CompanySetup" */ 'containers/CompanySetup'),
);

export default function Routes() {
	return (
		<Suspense fallback={<div>{null}</div>}>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/company-setup' component={CompanySetup} />
			</Switch>
		</Suspense>
	);
}
