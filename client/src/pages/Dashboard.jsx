import Button from '@material-ui/core/Button';

import Board from '../components/Board/Board';
import Navigation from '../components/Navigation/Navigation';

const Dashboard = () => {
	return (
		<div>
			<Navigation />
			<Board />
			<Button href="/request" variant="contained" color="primary">
				Make a Request
			</Button>
		</div>
	);
};

export default Dashboard;
