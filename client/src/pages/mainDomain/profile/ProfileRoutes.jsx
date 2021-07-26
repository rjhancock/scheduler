import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Profile from './Profile';

const ProfileRoutes = () => {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route path={`${match.url}/:username`}>
				<Profile />
			</Route>
			<Redirect from={`${match.url}`} to="/" />
		</Switch>
	);
};

export default ProfileRoutes;
