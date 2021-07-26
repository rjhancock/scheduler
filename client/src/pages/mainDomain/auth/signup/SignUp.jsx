import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
	Box,
	Button,
	// Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PasswordIcon from '@material-ui/icons/LockOutlined';
import ShowIcon from '@material-ui/icons/VisibilityOutlined';
import HideIcon from '@material-ui/icons/VisibilityOffOutlined';
// import FailIcon from '@material-ui/icons/Close';
// import SuccessIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
	passed: {
		color: 'green',
	},
	failed: {
		color: 'red',
	},
});

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
	const SYMBOLS = '@$!%*#?&';
	const classes = useStyles();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState({
		val: '',
		show: false,
	});
	const [email, setEmail] = useState('');
	const [role, setRole] = useState(0);
	const [consent] = useState({
		terms: false,
		privacy: false,
	});

	const [passValidation, setPassValidation] = useState({
		length: false,
		alpha: false,
		digit: false,
		special: false,
	});

	const [serverErrors, setServerErrors] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setServerErrors({});
		try {
			const res = await axios.post('http://localhost:5000/auth/signup', {
				username,
				email,
				password: password.val,
				role,
				consent,
			});
			res.data && window.location.replace('/login');
		} catch (error) {
			setServerErrors(error.response.data);
		}
		// What can go wrong?
		// 	Username is taken
		// 	Email is registered
		//		Email entered is not valid
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
					<Grid item xs={6}>
						<TextField
							error={serverErrors.username ? true : false}
							helperText={
								serverErrors.username ? serverErrors.username : ''
							}
							variant="outlined"
							label="Username"
							fullWidth
							onChange={(e) => setUsername(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PersonIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							error={serverErrors.email ? true : false}
							helperText={serverErrors.email ? serverErrors.email : ''}
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
							type={password.show ? 'text' : 'password'}
							fullWidth
							helperText={
								<>
									<Typography>Password should</Typography>
									<ul style={{ listStyle: 'none' }}>
										<li
											className={
												passValidation.length
													? classes.passed
													: classes.failed
											}
										>
											Contain at least 8 characters
										</li>
										<li
											className={
												passValidation.alpha
													? classes.passed
													: classes.failed
											}
										>
											Have at least one letter
										</li>
										<li
											className={
												passValidation.digit
													? classes.passed
													: classes.failed
											}
										>
											Have at least one number
										</li>
										<li
											className={
												passValidation.symbol
													? classes.passed
													: classes.failed
											}
										>
											{`Have at least one special symbol: ${SYMBOLS}`}
										</li>
									</ul>
								</>
							}
							onChange={(e) => {
								const val = e.target.value;

								setPassValidation({
									length: val.length >= 8,
									alpha: val.match(/[a-z]/i) !== null,
									digit: val.match(/[0-9]/) !== null,
									symbol:
										val.match(new RegExp(`[${SYMBOLS}]`)) !== null,
								});

								setPassword({ ...password, val });
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PasswordIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={() =>
												setPassword({
													...password,
													show: !password.show,
												})
											}
										>
											{password.show ? <HideIcon /> : <ShowIcon />}
										</IconButton>
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
						<Button
							variant="contained"
							color="primary"
							type="submit"
							fullWidth
						>
							Sign Up
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Box mt={-2} textAlign="right">
							<Link to="/auth/login" variant="body2">
								{'Already have an account? Log in'}
							</Link>
						</Box>
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
