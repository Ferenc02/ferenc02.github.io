<script lang="ts">
	const email: string = 'Ferenc03@proton.me';

	import { fade } from 'svelte/transition';

	import SEO from '../components/_seo.svelte';
</script>

<SEO
	title="Contact Me"
	description="Get in touch with Ferenc. via LinkedIn or email. Let's connect and discuss projects, ideas, or networking opportunities."
/>

<section
	class="flex h-full w-full flex-col items-center justify-center self-center px-6 text-center align-middle"
	in:fade={{ duration: 300 }}
>
	<h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-white">Let's Connect!</h1>
	<p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
		The best way to reach me is through LinkedIn. I'm always open to networking, discussing
		projects, or sharing ideas.
	</p>

	<!-- LinkedIn Button -->
	<a
		href="https://www.linkedin.com/in/ferenc02/"
		target="_blank"
		class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
	>
		<svg class="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M20.45 20.45h-3.933v-5.953c0-1.417-.027-3.242-1.975-3.242-1.978 0-2.28 1.545-2.28 3.138v6.057h-3.933V9.308h3.782v1.52h.054c.526-1 1.81-2.054 3.726-2.054 3.984 0 4.715 2.62 4.715 6.024v5.65zM5.337 7.778c-1.271 0-2.304-1.033-2.304-2.305s1.033-2.305 2.304-2.305 2.304 1.033 2.304 2.305-1.033 2.305-2.304 2.305zM7.303 20.45H3.37V9.308h3.933V20.45zM22.225 0H1.775C.793 0 0 .775 0 1.775v20.451C0 23.207.793 24 1.775 24h20.451C23.207 24 24 23.207 24 22.225V1.775C24 .793 23.207 0 22.225 0z"
			/>
		</svg>
		Connect on LinkedIn
	</a>

	<!-- Alternative Contact Info -->
	<div class="mt-8 text-gray-500 dark:text-gray-400">
		<p>Prefer email? Reach me at:</p>
		<a href="mailto:{email}" class="text-blue-600 hover:underline dark:text-blue-400">
			{email}
		</a>
	</div>
</section>
