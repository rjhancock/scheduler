import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	IconButton,
	Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
	},
	media: {
		height: 300,
	},
	chip: {
		display: 'flex',
		flexFlow: 'row wrap',
	},
});

const ArtistCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image="https://picsum.photos/200/300"
			/>
			<CardContent>
				<Typography variant="h5" component="h2">
					Cypuss
				</Typography>
			</CardContent>
			<CardActions className={classes.chip}>
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
				<Chip label="Tags" component="a" href="" clickable />
			</CardActions>
			<CardActions>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<Button size="small" color="primary" href="/cypuss/gallery">
					Gallery
				</Button>
			</CardActions>
		</Card>
	);
};

export default ArtistCard;
