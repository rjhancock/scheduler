import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	Artists,
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
					<Route path="/artists" exact component={() => <Artists />} />
					<Route
						path="/artist/:artist/gallery"
						component={() => <Gallery />}
					/>
					<Route
						path="/artist/:artist"
						component={() => <Dashboard />}
					></Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
