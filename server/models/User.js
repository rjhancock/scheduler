import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			// Roles:
			// 0b 0 0 -> Patron
			// 0b 0 1 -> Creator
			// 0b 1 0 -> Admin Patron
			// 0b 1 1 -> Admin Creator

			type: Number,
			required: true,
			default: 0b00,
		},
		displayName: {
			type: String,
		},
		profilePic: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

export default mongoose.model('User', UserSchema);
