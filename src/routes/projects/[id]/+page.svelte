<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import { fade } from 'svelte/transition';

	import { base } from '$app/paths';

	import SEO from '../../components/_seo.svelte';

	let folders: string[] = $state([]);

	let foundFolder = $state(false);

	let iframeElement = $state('');

	// svelte-ignore non_reactive_update
	let iframeRef: HTMLIFrameElement | null = null;

	let currentUrl = $state('');

	let seoTitle = $state('');
	let seoDescription = $state('');

	function customizeIframe() {
		if (iframeRef?.contentWindow && iframeRef?.contentDocument) {
			const doc = iframeRef.contentDocument;

			doc.body.querySelector('.canvas-title')?.setAttribute('style', 'color: #a0a0a0');

			// Set iframe height
			const bodyHeight = doc.body.scrollHeight; // Full height of the body content
			const htmlHeight = doc.documentElement.scrollHeight; // Full height of the HTML content
			iframeRef.style.height = `${Math.max(bodyHeight, htmlHeight)}px`;

			seoTitle = doc.title;

			//! Find better way to get description

			seoDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
			// seoDescription = doc.querySelector('p')?.textContent || '';
		}
	}

	onMount(async () => {
		currentUrl = $page.params.id;
		let testParam = $page.params.test;
		const response = await fetch(`${base}/api/nature of code folders`);
		if (response.ok) {
			folders = await response.json();

			foundFolder = folders.includes(currentUrl);

			if (!foundFolder) {
				window.location.href = '/projects';
			}
		} else {
			console.error('Failed to fetch folders from API');
		}
	});
</script>

<SEO title={seoTitle} description={seoDescription} />
<section
	class="relative flex h-full w-full flex-col items-center justify-center self-center text-center align-middle md:px-6"
	in:fade={{ duration: 300 }}
>
	<div class=" absolute bottom-0 right-0 m-4 flex self-start md:m-16">
		<a
			href="{base}/projects"
			class="flex
	items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-transform hover:scale-105 dark:bg-neutral-700"
		>
			<h2 class=" font-bold">Back</h2>
		</a>
	</div>

	{#await foundFolder}
		<p>Loading...</p>
	{:then}
		<iframe
			bind:this={iframeRef}
			onload={customizeIframe}
			src="{base}/projects/Nature-Of-Code/{currentUrl}/index.html"
			class="h-screen w-full shadow-2xl"
			title="Project Page"
		></iframe>
	{/await}
</section>
