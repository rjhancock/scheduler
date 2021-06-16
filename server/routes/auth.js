import express from 'express';
import User from '../models/User.js';

const router = express.Router();

//REGISTER
router.post('/signup', async (req, res) => {
	try {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			role: req.body.role,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

//LOGIN

export default router;
