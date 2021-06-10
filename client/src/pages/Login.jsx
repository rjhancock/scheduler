import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div style={{ display: 'flex', flexFlow: 'column' }}>
			<h1>Login Page</h1>
			<span>
				Need an account? <Link to="/signup">Sign Up</Link>
			</span>
		</div>
	);
};

export default SignUp;
