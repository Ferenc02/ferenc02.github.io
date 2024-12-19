<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';

	let folders: string[] = $state([]);

	let foundFolder = false;

	let foundFolderElement = $state('');

	onMount(async () => {
		let currentUrl = $page.params.id;
		const response = await fetch('/api/folders');
		if (response.ok) {
			folders = await response.json();

			foundFolder = folders.includes(currentUrl);

			if (foundFolder) {
				foundFolderElement = `<iframe
                        src="/projects/Nature-Of-Code/${currentUrl}/index.html"
                        class="w-full  "
                        title="Project Page"
                            ></iframe>`;
			} else {
				foundFolderElement = '<p>Could not find folder</p>';
			}
		} else {
			console.error('Failed to fetch folders from API');
		}
	});
</script>

{@html foundFolderElement}
