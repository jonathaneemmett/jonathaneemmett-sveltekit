import { invalid, redirect } from '@sveltejs/kit';
import User from '$lib/models/User.js';
import argon2 from 'argon2';

export const load = async ({ locals }) => {
	// If the user is already logged in, redirect to the home page
	if (locals?.user) {
		throw redirect(302, '/');
	}
};

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// Simple Validation
		if (!email || !password) {
			return invalid(400, { invalid: true });
		}

		// Check if email exists
		const user = await User.findOne({ email });
		if (!user) {
			return invalid(400, { invalid: true });
		}

		// Check if password is correct
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			return invalid(400, { invalid: true });
		}

		// Update user token
		const updateToken = await argon2.hash(`${email}${password}`);
		await user.updateOne({ token: updateToken });

		// Set cookie
		cookies.set('session', updateToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 1
		});

		// Redirect to home
		throw redirect(303, '/');
	}
};
