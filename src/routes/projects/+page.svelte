<script lang="ts">
	import { fade } from 'svelte/transition';

	import { base } from '$app/paths';

	// get static
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section
	class="flex h-full w-full flex-col justify-center px-6 py-12 text-center align-middle"
	in:fade={{ duration: 300 }}
>
	<h1 class="py-4 text-4xl font-bold">Nature of Code</h1>
	<p class="dark:text-gray-40 text-lg text-gray-600 dark:text-gray-400">
		This is a collection of projects that I have created while following the Nature of Code book by
		Daniel Shiffman.
	</p>
</section>
