import Board from './Board/Board';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import SignUp from '../views/SignUp';
import Navigation from './Navigation/Navigation';
import Artists from '../views/Artists';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';

const App = () => {
	return (
		<>
			<Router>
				<Container className="flex">
					<Navigation />
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/cypuss" exact component={() => <Board />} />
						<Route path="/signup" exact component={() => <SignUp />} />
						<Route path="/artists" exact component={() => <Artists />} />
					</Switch>
				</Container>
			</Router>
		</>
	);
};

export default App;
