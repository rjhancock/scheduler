import Board from './Board/Board';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';

const App = () => {
	return (
		<>
			<Container className="flex">
				<Board />
				<Button variant="contained" color="primary">
					Make A Request
				</Button>
			</Container>
		</>
	);
};

export default App;
