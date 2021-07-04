import express from 'express';

const router = express.Router();

// @route   GET /creators
// @desc    Returns all of the creators

router.get('/', async (req, res) => {
	try {
		console.log('Got it');
		const creators = [
			{
				username: 'cypuss',
				image: 'https://picsum.photos/200/300',
				tags: ['tag1', 'tag2'],
			},
		];
		res.status(200).json(creators);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

export default router;
