import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';

const Landing = () => {
	return (
		<>
			<Navigation />
			<main>
				<h1>Welcom to FoxFry</h1>
				<span>Here I go convincing you that you need this site.</span>
				<button onClick={() => <Redirect to="/creators" />}>
					Find Creators
				</button>
				<button onClick={() => <Redirect to="/signup" />}>Sign Up</button>
			</main>
		</>
	);
};

export default Landing;
