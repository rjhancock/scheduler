import { Box, Container } from '@material-ui/core';

import Navigation from '../components/Navigation';
import CreatorCard from '../components/CreatorCard';

const Creators = () => {
	const creators = [...new Array(15)];
	return (
		<div>
			<Navigation />
			<Container>
				<Box textAlign="center">
					<h1>Creators</h1>
				</Box>
				<Box display="flex" flexWrap="wrap" justifyContent="space-between">
					{creators.map((creator) => (
						<CreatorCard />
					))}
				</Box>
			</Container>
		</div>
	);
};

export default Creators;
