import { mdsvex } from 'mdsvex';
import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { env } from 'node:process';

// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// See https://svelte.dev/docs/kit/adapters for more information about adapters.
var adapter = autoAdapter();

if (env['ADAPTER'] == 'static') {
	adapter = staticAdapter({
		fallback: '404.html'
	});
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/Post.svelte'
		})
	],
	kit: {
		adapter: adapter
	},
	extensions: ['.svelte', '.md'],
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
};

export default config;
