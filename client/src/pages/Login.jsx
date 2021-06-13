import { Link } from 'react-router-dom';

import {
	Button,
	Container,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import PasswordIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" align="center">
				{'Login'}
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
						<Typography variant="caption">
							<Link to="">Forgot Password</Link>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" fullWidth>
							Login
						</Button>
					</Grid>
				</Grid>
				<Grid container justify="flex-end">
					<Grid item>
						<Link to="/signup" variant="body2">
							{'Need an account? Sign up'}
						</Link>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default Login;
