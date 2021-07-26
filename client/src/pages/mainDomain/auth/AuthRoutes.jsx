import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/SignUp';

const AuthRoutes = () => {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={`${match.url}/login`}>
				<Login />
			</Route>
			<Route exact path={`${match.url}/signup`}>
				<SignUp />
			</Route>
			<Redirect from={`${match.url}`} to="/" />
		</Switch>
	);
};

export default AuthRoutes;
