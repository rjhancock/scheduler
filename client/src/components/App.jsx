import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/signup" exact component={() => <SignUp />} />
					<Route path="/login" exact component={() => <Login />} />
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
		</>
	);
};

export default App;
