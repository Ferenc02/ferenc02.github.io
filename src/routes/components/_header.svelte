<script lang="ts">
	import { base } from '$app/paths';
</script>

<header class="min-w-full p-4 md:p-8">
	<nav class="flex justify-around">
		<a href="{base}/" class="logo">Fs</a>
		<ul class="flex gap-4">
			<li class="mr-2 hidden hover:underline md:block">
				<a href="{base}/">Home</a>
			</li>
			<li class="mr-2 hover:underline"><a href="{base}/projects">Projects</a></li>
			<li class="mr-2 hover:underline"><a href="{base}/about">About</a></li>
			<li class="mr-2 hover:underline"><a href="{base}/contact">Contact </a></li>
		</ul>
	</nav>
</header>
