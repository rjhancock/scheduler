import express from 'express';
import dotenv from 'dotenv';
import connectDB from './middleware/database.js';

import authRoutes from './routes/auth.js';
import creatorRoutes from './routes/creator.js';

const app = express();

dotenv.config();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/creators', creatorRoutes);

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () =>
	console.log(`Server is running in ${MODE} mode on port ${PORT}`)
);
