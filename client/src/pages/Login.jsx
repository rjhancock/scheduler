import { useRef, useContext } from 'react';
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
import { Context } from '../context/Context';
import axios from 'axios';
import { LoginStart, LoginSuccess, LoginFailure } from '../context/Actions';

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(LoginStart());
		try {
			const res = await axios.post('/auth/login', {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			dispatch(LoginSuccess(res.data));
			// If creator login
			if (res.data.role % 2) {
				return window.location.replace(`/${res.data.username}`);
			}
			window.location.replace('/creators');
		} catch (err) {
			console.log({ err });
			dispatch(LoginFailure());
		}
	};

	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" align="center">
				{'Login'}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Username"
							fullWidth
							inputRef={userRef}
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
							inputRef={passwordRef}
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
						<Button
							variant="contained"
							color="primary"
							fullWidth
							type="submit"
							disabled={isFetching}
						>
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
