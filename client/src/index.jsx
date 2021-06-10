// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Components
import App from './components/App';

// Stylesheets
import '@atlaskit/css-reset';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
