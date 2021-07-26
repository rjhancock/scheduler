import {
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';

import Navigation from '../../../components/navigation/Navigation';

const yyyy_mm_dd = () => {
	const now = new Date();

	const mm = (now.getMonth() + 1).toString().padStart(2, '0');
	const dd = now.getDate().toString().padStart(2, '0');
	const yyyy = now.getFullYear().toString();

	return `${yyyy}-${mm}-${dd}`;
};

const Request = () => {
	const today = yyyy_mm_dd();

	return (
		<div>
			<Navigation />
			<Container component="main" maxWidth="sm">
				<Typography variant="h4" component="h1" align="center">
					{'Request a Commission'}
				</Typography>
				<form noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField variant="outlined" label="Title" fullWidth />
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								label="Description"
								fullWidth
								multiline
								rows={10}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								label="Deadline"
								type="date"
								fullWidth
								defaultValue={today}
							/>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label={
											<Typography>
												{'I want to remain anonymous.'}
											</Typography>
										}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label={
											<Typography>
												{'I want to keep this project secret.'}
											</Typography>
										}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label={
											<Typography>
												{
													'This project is not safe for work (NSFW).'
												}
											</Typography>
										}
									/>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={12}>
							<Button variant="contained" color="primary" fullWidth>
								Request
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</div>
	);
};

export default Request;
