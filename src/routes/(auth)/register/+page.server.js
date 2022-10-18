import User from '$lib/models/User.js';
import argon2 from 'argon2';
import { invalid, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// Todo - check if user is already logged in
};

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');

		// Simple Validation
		if (!name || !email || !password) {
			return invalid(400, { invalid: true });
		}

		// Check if email exists
		const user = await User.findOne({ email });
		if (user) {
			return invalid(400, { user: true });
		}

		// Hash password
		const hashedPassword = await argon2.hash(password);

		// Create user
		let newUser = new User({
			name,
			email,
			password: hashedPassword
		});

		// Save user
		await newUser.save();

		// Redirect to login
		throw redirect(303, '/login');
	}
};
