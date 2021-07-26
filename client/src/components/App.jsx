import { useContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import { Context } from '../context/Context';
import {
	Creators,
	Dashboard,
	Gallery,
	Home,
	Login,
	Request,
	SignUp,
} from '../pages';

import Logout from '../pages/Logout';

import './App.css';

const App = () => {
	const { user } = useContext(Context);

	const redirect = (user) => {
		if (!user) return; // TODO: This should probably throw an exception if the user is not defined
		if (user && user.role % 2) return <Redirect to={`/${user.username}`} />;
		return <Redirect to="/creators" />;
	};

	return (
		<Router>
			<Switch>
				<Route path="/signup">{!user ? <SignUp /> : redirect(user)}</Route>
				<Route path="/login">{!user ? <Login /> : redirect(user)}</Route>
				<Route path="/logout" component={() => <Logout />} />
				<Route path="/" exact component={() => <Home />} />
				<Route path="/request" exact component={() => <Request />} />
				<Route path="/creators" exact component={() => <Creators />} />
				<Route
					path="/:creator/gallery"
					exact
					component={() => <Gallery />}
				/>
				<Route path="/:creator" exact component={() => <Dashboard />} />
			</Switch>
		</Router>
	);
};

export default App;
