<script lang="ts">
	import { fade } from 'svelte/transition';

	import { base } from '$app/paths';

	import { onMount } from 'svelte';

	let folders: string[] = $state([]);

	onMount(async () => {
		const response = await fetch('/api/folders');
		if (response.ok) {
			folders = await response.json();
			//console.log(folders);
		} else {
			console.error('Failed to fetch folders');
		}
	});

	// get static

	// Get all folders in static/projects/Nature-Of-Code folder
	// let projects: any = import.meta.glob('../../static/projects/Nature-Of-Code/*/', {
	// 	eager: true,
	// 	query: '?raw'
	// });
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section class="flex h-full w-full px-6 py-12 text-center align-middle" in:fade={{ duration: 300 }}>
	<div class="container mx-auto max-w-4xl">
		<h1 class="py-4 text-4xl font-bold">Nature of Code</h1>
		<p class="dark:text-gray-40 text-lg text-gray-600 dark:text-gray-400">
			This collection showcases projects inspired by <b>The Nature of Code</b> by Daniel Shiffman, a
			foundational resource that bridges the gap between programming and the natural world. Through these
			projects, I explore how algorithms can replicate patterns and phenomena seen in nature, from fractals
			to emergent behavior, revealing the profound connection between code and the natural world.
		</p>
		<!--{base}/projects/Nature-Of-Code/{folder}/index.html //If you want to go to the static link-->
		<!--{base}/projects/{folder} //If you want sveltekit own rendering-->
		<div class="mt-8 grid grid-cols-3 gap-4">
			{#each folders as folder}
				<a
					href="{base}/projects/{folder}"
					class=" flex items-center justify-center rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">{folder}</h2>
				</a>
			{/each}
		</div>
	</div>
</section>
