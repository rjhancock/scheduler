import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

import './App.css';

const App = () => {
	const { user } = useContext(Context);
	return (
		<Router>
			<Switch>
				<Route path="/signup">
					{!user ? (
						<SignUp />
					) : user.role % 2 ? (
						<Dashboard />
					) : (
						<Creators />
					)}
				</Route>
				<Route path="/login" exact component={() => <Login />} />
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
