// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';
import { Provider } from './context/Context';

// Stylesheets
import '@atlaskit/css-reset';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
