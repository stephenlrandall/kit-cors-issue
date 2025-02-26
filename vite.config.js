import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		assetsInlineLimit: 0
	},
	plugins: [sveltekit()]
});
