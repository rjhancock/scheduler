import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<h1>Welcome to FoxFry</h1>
			<div style={{ display: 'flex' }}>
				<div className="col">
					<h2>Creators</h2>
					<Link to="/signup">Sign Up</Link>
					<Link to="/login">Login</Link>
				</div>
				<div className="col">
					<h2>Patrons</h2>
					<a href="/creators">Find Creator</a>
				</div>
			</div>
		</>
	);
};

export default Home;
