import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
	Box,
	Button,
	Container,
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';

import Navigation from '../components/Navigation';

const Gallery = () => {
	const { creator } = useParams();

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [tiles, setTiles] = useState([]);

	useEffect(() => {
		fetch('https://picsum.photos/v2/list')
			.then((res) => res.json())
			.then(
				(data) => {
					setIsLoaded(true);
					setTiles(data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) return <div>Error: {error.message}</div>;
	if (!isLoaded) return <div>Loading...</div>;
	return (
		<div>
			<Navigation />
			<Container maxWidth="xl">
				<Box textAlign="center">
					<Button href={`/${creator}`} variant="contained" color="primary">
						Request a Commission
					</Button>
				</Box>
				<GridList cellHeight={225} cols={3}>
					{tiles.map((tile, index) => (
						<GridListTile
							key={index}
							style={{
								marginTop: '8px',
								padding: '4px',
							}}
						>
							<img src={tile.download_url} alt="" />
							<GridListTileBar
								title={'Test'}
								subtitle={<span>by: {tile.author}</span>}
								actionIcon={
									<IconButton>
										<InfoIcon color="secondary" />
									</IconButton>
								}
							></GridListTileBar>
						</GridListTile>
					))}
				</GridList>
			</Container>
		</div>
	);
};

export default Gallery;
