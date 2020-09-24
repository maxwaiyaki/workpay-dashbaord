import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
// import App from 'containers/App';
import * as serviceWorker from './containers/serviceWorker';

const robotoObserver300 = new FontFaceObserver('Roboto', { weight: 300 });
const robotoObserver400 = new FontFaceObserver('Roboto', { weight: 400 });
const robotoObserver500 = new FontFaceObserver('Roboto', { weight: 500 });
const robotoObserver700 = new FontFaceObserver('Roboto', { weight: 700 });

// When Roboto is loaded, add a font-family using Roboto to the body
Promise.all([
	robotoObserver300.load(),
	robotoObserver400.load(),
	robotoObserver500.load(),
	robotoObserver700.load(),
]).then(() => {
	document.body.classList.add('fontLoaded');
});

const render = () => {
	// eslint-disable-next-line global-require
	const App = require('./containers/App').default;
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root'),
	);
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./containers/App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
