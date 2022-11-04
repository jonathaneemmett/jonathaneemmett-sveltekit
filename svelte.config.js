import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$db: path.resolve('./src/db')
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
