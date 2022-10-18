import { redirect } from '@sveltejs/kit';

export const load = async () => {
	// There is no need for a user to ever land on this page
	throw redirect(302, '/');
};

export const actions = {
	default: async ({ cookies }) => {
		// Eat the cookie
		cookies.set('session', '', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 0
		});

		// Redirect to login
		throw redirect(302, '/login');
	}
};
