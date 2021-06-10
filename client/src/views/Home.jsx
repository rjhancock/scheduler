import { Link, withRouter } from 'react-router-dom';

const Home = () => {
	return (
		<div style={{ display: 'flex' }}>
			<div className="col">
				<h2>Artists</h2>
				<Link to="/signup">Sign Up</Link>
			</div>
			<div className="col">
				<h2>Patrons</h2>
				<a href="/artists">Find Artists</a>
			</div>
		</div>
	);
};

export default withRouter(Home);
