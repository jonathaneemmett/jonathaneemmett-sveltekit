import User from '../../../models/User.js';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { error } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// check if email exists
		const user = await User.findOne({ email });
		if (!user) {
			throw error(400, 'Invalid credentials');
		}

		// check if password is correct
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			throw error(400, 'Invalid credentials');
		}

		// Create token
		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: '1d'
		});

		return {
			email: user.email,
			token
		};
	}
};
