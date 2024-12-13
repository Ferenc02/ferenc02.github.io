<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import NavBar from './components/_header.svelte';
	import Footer from './components/_footer.svelte';
</script>

<NavBar />
<main class="min-w-full flex-grow p-2 md:p-4">
	{@render children()}
</main>

<Footer />
