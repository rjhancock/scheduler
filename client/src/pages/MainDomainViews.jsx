import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Landing from './mainDomain/Landing';
import Creators from './mainDomain/creators/Creators';
import AuthRoutes from './mainDomain/auth/AuthRoutes';
import ProfileRoutes from './mainDomain/profile/ProfileRoutes';

const MainDomainViews = () => {
	return (
		<Router>
			<Switch>
				<Route path="/auth">
					<AuthRoutes />
				</Route>
				<Route path="/creators">
					<Creators />
				</Route>
				<Route path="/fans">
					<ProfileRoutes />
				</Route>
				<Route exact path="/">
					<Landing />
				</Route>
				{/* Default Route */}
				<Redirect from="/" to="/" />
			</Switch>
		</Router>
	);
};

export default MainDomainViews;
