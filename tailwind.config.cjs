/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgba(100, 108, 255, 1)',
				'primary-light': 'rgba(100, 108, 255, 0.1)',
				'primary-dark': 'rgba(100, 108, 255, 0.5)'
			}
		}
	},
	plugins: []
};
