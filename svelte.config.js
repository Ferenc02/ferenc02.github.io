import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html' // Required for single-page apps
		}),
		paths: {
			base: '/ferenc02.github.io' // Base path for GitHub Pages
		},
		prerender: {
			entries: ['*'] // Prerender all pages
		}
	}
};

export default config;
