import path from 'path';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		package: {
			exports: (file) => file === 'index.ts'
		},

		vite: {
			resolve: {
				alias: {
					'svelte-viz': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
