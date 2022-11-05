/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgba(100, 108, 255, 1)',
				'primary-light': 'rgba(100, 108, 255, 0.1)',
				'primary-dark': 'rgba(100, 108, 255, 0.5)',
				'mustard-yellow': 'rgba(255, 219, 88, 1)',
				'gray-1000': '#151515'
			},
			height: {
				'screen-1/8': 'calc(100vh / 8)',
				'screen=1/4': '25vh',
				'screen-1/2': '50vh',
				'screen-3/4': '75vh'
			}
		}
	},
	plugins: []
};
