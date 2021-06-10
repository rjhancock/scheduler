import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SignUp, Login, Artists, Request } from '../pages';

import Board from './Board/Board';
import NavigationPage from './NavigationPage/NavigationPage';

import Container from '@material-ui/core/Container';

import './App.css';

const App = () => {
	return (
		<>
			<Router>
				<Container className="flex">
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/signup" exact component={() => <SignUp />} />
						<Route path="/login" exact component={() => <Login />} />
						<Route path="/request" exact component={() => <Request />} />
						<Route
							path="/artists"
							exact
							component={() => (
								<NavigationPage>
									<Artists />
								</NavigationPage>
							)}
						/>
						<Route
							path="/:artist"
							component={() => (
								<NavigationPage>
									<Board />
								</NavigationPage>
							)}
						/>
					</Switch>
				</Container>
			</Router>
		</>
	);
};

export default App;
