import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/User.js';

const router = express.Router();

const MONGO_DUPLICATE_KEY = 11000;

//REGISTER
router.post('/signup', async (req, res) => {
	try {
		const username = req.body.username;
		const email = req.body.email;

		const errors = {};
		if ((await User.countDocuments({ username })) > 0)
			errors.username = `This username is taken.`;
		if ((await User.countDocuments({ email })) > 0)
			errors.email = `This email is already registered.`;

		if (Object.keys(errors).length > 0) {
			console.log({ errors });
			return res.status(500).json(errors);
		}

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hash,
			role: req.body.role,
			consent: req.body.consent,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

//LOGIN
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json('Wrong credentials!');

		const validated = await bcrypt.compare(req.body.password, user.password);
		!validated && res.status(400).json('Wrong credentials!');

		// Prevent sending password
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(err);
	}
});

export default router;
