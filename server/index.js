import express from 'express';
import dotenv from 'dotenv';
import connectDB from './middleware/database.js';

import authRoutes from './routes/auth.js';

const app = express();

dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () =>
	console.log(`Server is running in ${MODE} mode on port ${PORT}`)
);
