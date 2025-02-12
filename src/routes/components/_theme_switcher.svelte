<script lang="ts">
	import { onMount } from 'svelte';

	import sunSVG from '../../images/sun.svg';
	import moonSVG from '../../images/moon.svg';

	let isDark: boolean = $state(false);

	onMount(() => {
		isDark = localStorage.getItem('theme') === 'dark';
	});

	// Toggle theme between dark and light
	const toggleTheme = () => {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	};
</script>

<aside class="">
	<button
		class={`flex h-8 w-16 cursor-pointer items-center rounded-full border p-1 shadow-sm transition-colors ${isDark ? 'border-neutral-700 bg-neutral-700 ' : 'border-gray-300 bg-slate-100 '}`}
		onclick={toggleTheme}
		aria-label="Toggle theme"
	>
		<div
			class={`rounded-ful h-6 w-6 transform rounded-full shadow-md filter transition-transform ${isDark ? 'translate-x-0' : 'translate-x-8'}`}
		>
			<img
				src={isDark ? moonSVG : sunSVG}
				alt="Theme switcher"
				class={`h-6 w-6 ${isDark ? '' : 'invert'}`}
			/>
		</div>
	</button>
</aside>
