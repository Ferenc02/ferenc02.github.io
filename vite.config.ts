import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export const prerender = true;
export default defineConfig({
	plugins: [sveltekit()],
	base: '/ferenc02.github.io'
});
