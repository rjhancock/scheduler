// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import MainDomainViews from './pages/MainDomainViews';
import SubDomainViews from './pages/SubDomainViews';
import { Provider } from './context/Context';

// Stylesheets
import '@atlaskit/css-reset';
import './index.css';

const selectViews = () => {
	const parsedData = window.location.host.split('.');
	// If path has a subdomain, then go to that artists page
	if (parsedData.length >= 3) {
		return <SubDomainViews subdomain={parsedData[0]} />;
	}
	return <MainDomainViews />;
};

ReactDOM.render(
	<React.StrictMode>
		<Provider>{selectViews()}</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
