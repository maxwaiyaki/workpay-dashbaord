import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LandingPage = lazy(() =>
	import(/* webpackChunkName: "LandingPage" */ 'containers/LandingPage'),
);

export default function Routes() {
	return (
		<Suspense fallback={<div>{null}</div>}>
			<Switch>
				<Route exact path='/' component={LandingPage} />
			</Switch>
		</Suspense>
	);
}
