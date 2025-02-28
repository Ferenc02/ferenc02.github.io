<script lang="ts">
	import { fade } from 'svelte/transition';
	import githubSVG from '../../images/github-mark.svg';

	import { base } from '$app/paths';

	import { onMount } from 'svelte';

	let folders: string[] = $state([]);

	import SEO from '../components/_seo.svelte';

	onMount(async () => {
		const response = await fetch(`${base}/api/nature of code folders`);
		if (response.ok) {
			folders = await response.json();
			//console.log(folders);
		} else {
			console.error('Failed to fetch folders :(');
		}
	});

	// get static

	// Get all folders in static/projects/Nature-Of-Code folder
	// let projects: any = import.meta.glob('../../static/projects/Nature-Of-Code/*/', {
	// 	eager: true,
	// 	query: '?raw'
	// });
</script>

<SEO
	title="Projects"
	description="This collection showcases projects coded by Ferenc. Projects ranging from fractals, website design, and more."
/>

<div class="flex h-full w-full flex-col items-center justify-center">
	<section
		class="flex h-full w-full px-6 py-12 text-center align-middle"
		in:fade={{ duration: 300 }}
	>
		<div class="container mx-auto max-w-4xl">
			<h1 class="pb-4 text-4xl font-bold">Many of my projects are open-source</h1>
			<p class="dark:text-gray-40 text-lg text-gray-600 dark:text-gray-400">
				Here are some of the open-source projects I've worked on and contributed to. These projects
				range from web development to blockchain and more. Feel free to check them out on GitHub.
			</p>
			<div class="button-container mt-8 flex justify-center">
				<a
					href="https://github.com/Ferenc02"
					target="_blank"
					class="
					flex items-center justify-center
					
					rounded-lg bg-white px-6 py-3 font-bold text-black shadow-md transition-transform hover:scale-105 dark:bg-neutral-700 dark:text-white"
				>
					<img src={githubSVG} alt="GitHub" class="mr-2 inline-block h-6 w-6 filter dark:invert" />
					<span>GitHub</span>
				</a>
			</div>

			<h1 class="mt-8 py-4 text-4xl font-bold">Projects</h1>
			<p class="dark:text-gray-40 text-lg text-gray-600 dark:text-gray-400">
				Here are some larger projects I've worked on. These projects range from web development to
				blockchain and more.
			</p>

			<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<a
					href="https://github.com/Ferenc02/Westcoast-Education"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">Westcoast-Education</h2>
				</a>
				<a
					href="https://github.com/Ferenc02/Block-Explorer"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">Block-Explorer</h2>
				</a>
				<a
					href="https://github.com/Ferenc02/WasmFusion-PDF-Backend"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">WasmFusion-PDF (work in progress)</h2>
				</a>

				<a
					href="https://github.com/Ferenc02/bcu24d-agila-block-the-chain-group3"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">Blockchain for dummies 101</h2>
				</a>
				<a
					href="https://github.com/K3mp3/JS-gruppuppgift"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">Travel Plan</h2>
				</a>
				<a
					href="https://codejournal-dev.vercel.app/"
					target="_blank"
					class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
				>
					<h2 class="text-xl font-bold">Blog/Learning Website (work in progress)</h2>
				</a>
			</div>
		</div>
	</section>
	<section
		class="flex h-full w-full px-6 py-12 text-center align-middle"
		in:fade={{ duration: 300 }}
	>
		<div class="container mx-auto max-w-4xl">
			<h1 class="py-4 text-4xl font-bold">Nature of Code</h1>
			<p class="dark:text-gray-40 text-lg text-gray-600 dark:text-gray-400">
				This collection showcases projects inspired by <b>The Nature of Code</b> by Daniel Shiffman,
				a foundational resource that bridges the gap between programming and the natural world. Through
				these projects, I explore how algorithms can replicate patterns and phenomena seen in nature,
				from fractals to emergent behavior, revealing the profound connection between code and the natural
				world.
			</p>
			<!--{base}/projects/Nature-Of-Code/{folder}/index.html //If you want to go to the static link-->
			<!--{base}/projects/{folder} //If you want sveltekit own rendering-->
			<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each folders as folder}
					<a
						href="{base}/projects/{folder}"
						class=" flex transform-gpu items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-neutral-700"
					>
						<h2 class="text-xl font-bold">{folder}</h2>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
