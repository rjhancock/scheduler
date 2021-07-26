import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Dashboard from './subDomain/dashboard/Dashboard';
import Gallery from './subDomain/gallery/Gallery';
import Request from './subDomain/request/Request';

const SubDomainViews = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/gallery">
					<Gallery />
				</Route>
				<Route exact path="/request">
					<Request />
				</Route>
				<Route exact path="/">
					<Dashboard />
				</Route>
				<Redirect from="/" to="/" />
			</Switch>
		</Router>
	);
};

export default SubDomainViews;
