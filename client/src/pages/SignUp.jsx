import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import PasswordIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Copyright = () => {
	return (
		<Typography variant="body2" align="center">
			{'Copyright '}
			&copy;{' '}
			<Link color="inherit" to="">
				{'FoxFry'}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const SignUp = () => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
		confirm: '',
	});
	const [email, setEmail] = useState('');
	const [role, setRole] = useState(0);
	const [consent, setConsent] = useState({
		terms: false,
		privacy: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/auth/signup', {
				username: credentials.username,
				email,
				password: credentials.password,
				role,
				consent,
			});
			console.log({ res });
		} catch (error) {
			console.log({ error });
		}
		// What can go wrong?
		// 	Username is taken
		// 	Email is registered
		// 	Passwords don't match
		// 	Consent not given
		//
		// Which of these are client side?
		//		Email form
		//		Passwords
		//		Consent
		//
		//	Email checks
		//		Email follows proper email form
		// Password checks
		//		Password === Confirm
		// 	Password meets security requirements
		// Consent checks
		//		Boxes checked

		// const res = axios('/auth', {
		// 	username,
		// 	email,
		// 	password: pas,
		// 	role,
		// });
	};

	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" align="center">
				{'Sign Up Page'}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Username"
							fullWidth
							onChange={(e) =>
								setCredentials({
									...credentials,
									username: e.target.value,
								})
							}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PersonIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Email"
							type="email"
							autoComplete="email"
							fullWidth
							onChange={(e) => setEmail(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<MailOutlineIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Password"
							type="password"
							fullWidth
							onChange={(e) =>
								setCredentials({
									...credentials,
									password: e.target.value,
								})
							}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PasswordIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Confirm Password"
							type="password"
							fullWidth
							onChange={(e) =>
								setCredentials({
									...credentials,
									confirm: e.target.value,
								})
							}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl component="fieldset">
							<Typography component="legend">I am a</Typography>
							<RadioGroup
								value={role.toString()}
								onChange={(e) => setRole(parseInt(e.target.value))}
							>
								<FormControlLabel
									value="1"
									label="Creator"
									control={<Radio />}
								/>
								<FormControlLabel
									value="0"
									label="Patron"
									control={<Radio />}
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox />}
							onChange={(e) => {
								setConsent({
									...consent,
									terms: e.target.checked,
								});
							}}
							label={
								<Typography>
									{'I have read and agree to the '}
									<Link to="">{'Terms and Conditions'}</Link>.
								</Typography>
							}
						/>
						<FormControlLabel
							control={<Checkbox />}
							onChange={(e) => {
								setConsent({
									...consent,
									privacy: e.target.checked,
								});
							}}
							label={
								<Typography>
									{'I have read and agree to the '}
									<Link to="">{'Privacy Policy'}</Link>.
								</Typography>
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							fullWidth
						>
							Signup
						</Button>
					</Grid>
				</Grid>
				<Grid container justify="flex-end">
					<Grid item>
						<Link to="/login" variant="body2">
							{'Already have an account? Log in'}
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
