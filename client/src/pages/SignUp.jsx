import { Link } from 'react-router-dom';

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
	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" align="center">
				{'Sign Up Page'}
			</Typography>
			<form noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Username"
							fullWidth
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
							autoCapitalize="email"
							fullWidth
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
							<Typography component="legend">I am a(n)</Typography>
							<RadioGroup>
								<FormControlLabel
									value="artist"
									label="Artist"
									control={<Radio />}
								/>
								<FormControlLabel
									value="patron"
									label="Patron"
									control={<Radio />}
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox />}
							label={
								<Typography>
									{'I have read and agree to the '}
									<Link to="">{'Terms and Conditions'}</Link>.
								</Typography>
							}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label={
								<Typography>
									{'I have read and agree to the '}
									<Link to="">{'Privacy Policy'}</Link>.
								</Typography>
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
