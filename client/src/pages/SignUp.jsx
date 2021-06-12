import { Link } from 'react-router-dom';

import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';

const Copyright = () => {
	return (
		<Typography variant="body2" align="center">
			{'Copyright '}
			&copy;{' '}
			<Link color="inherit" href="#">
				FoxFry
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const SignUp = () => {
	return (
		<Container component="main" maxWidth="sm">
			<h1>Sign Up Page</h1>
			<form noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField variant="outlined" label="Username" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Email"
							type="email"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Password"
							type="password"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Confirm Password"
							type="password"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox />}
							label={
								<span>
									I agree to the{' '}
									<Link to="">Terms and Conditions</Link>.
								</span>
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" fullWidth>
							Signup
						</Button>
					</Grid>
				</Grid>
				<Grid container justify="flex-end">
					<Grid item>
						<Link to="/login" variant="body2">
							Already have an account? Log in
						</Link>
					</Grid>
				</Grid>
			</form>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignUp;
