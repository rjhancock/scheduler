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

import FavoriteIcon from '@material-ui/icons/Favorite';

const ArtistCard = () => {
	return (
		<Card>
			<CardMedia image="" title="" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Cypuss
				</Typography>
			</CardContent>
			<CardActions>
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
