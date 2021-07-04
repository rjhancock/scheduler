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

const CreatorCard = () => {
	const classes = useStyles();

	const tags = [
		'Lorem',
		'ipsum',
		'dolor',
		'sit',
		'amet',
		'consectetur',
		'adipisicing',
		'elit',
		'Natus',
		'voluptatibus',
	];
	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image="https://picsum.photos/200/300"
			/>
			<CardContent>
				<Typography variant="h5" component="h2">
					Creator
				</Typography>
			</CardContent>
			<CardActions className={classes.chip}>
				{[...new Array(Math.floor(Math.random() * 6) + 1)].map((_) => (
					<Chip
						label={tags[Math.floor(Math.random() * tags.length)]}
						component="a"
						href=""
						clickable
					/>
				))}
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

export default CreatorCard;
