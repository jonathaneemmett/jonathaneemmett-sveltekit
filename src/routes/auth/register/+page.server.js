import User from '../../../models/User.js';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { error } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
export const actions = {
	// default: async ({ request }) => {
	// 	const data = await request.formData();
	// 	const name = data.get('name');
	// 	const email = data.get('email');
	// 	const password = data.get('password');

	// 	// check if email exists
	// 	const user = await User.findOne({ email });
	// 	if (user) {
	// 		throw error(400, 'Email already exists');
	// 	}

	// 	// Hash password
	// 	const hashedPassword = await argon2.hash(password);

	// 	// Create user
	// 	let newUser = new User({
	// 		name,
	// 		email,
	// 		password: hashedPassword
	// 	});

	// 	// Save user
	// 	await newUser.save();

	// 	// Create token
	// 	const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
	// 		expiresIn: '1d'
	// 	});

	// 	return {
	// 		email: newUser.email,
	// 		token
	// 	};
	// },
	register: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');

		// check if email exists
		const user = await User.findOne({ email });
		if (user) {
			throw error(400, 'Email already exists');
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

		// Create token
		const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
			expiresIn: '1d'
		});

		return {
			email: newUser.email,
			token
		};
	}
};
