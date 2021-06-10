import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div style={{ display: 'flex', flexFlow: 'column' }}>
			<h1>Sign Up Page</h1>
			<span>
				Already have an account? <Link to="/login">Login</Link>
			</span>
		</div>
	);
};

export default SignUp;
