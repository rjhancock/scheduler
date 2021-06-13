import {
	Container,
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';

const Gallery = () => {
	const tiles = [...Array(30)];
	return (
		<Container>
			<GridList cellHeight={180}>
				{tiles.map((_, index) => (
					<GridListTile key={index}>
						<img src="https://picsum.photos/200/300" alt="" />
						<GridListTileBar
							title={'Test'}
							subtitle={<span>by: {'Test'}</span>}
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
	);
};

export default Gallery;
