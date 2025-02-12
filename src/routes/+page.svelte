<script lang="ts">
	import { onMount } from 'svelte';
	import githubSVG from '../images/github-mark.svg';
	import linkedinSVG from '../images/linkedin.svg';
	import resumeSVG from '../images/document.svg';

	import { base } from '$app/paths';

	import { fade } from 'svelte/transition';

	import SEO from './components/_seo.svelte';

	// Typewriter effect
	const typeWriter = () => {
		const textElement: any = document.querySelector('.welcome-title');

		const wrapTextNodes = (element: HTMLElement) => {
			const nodes = Array.from(element.childNodes);

			nodes.forEach((node: any) => {
				if (node.nodeType === Node.TEXT_NODE) {
					// Normalize the text content: remove excess spaces and trim
					const textContent = node.textContent.replace(/\s+/g, ' ').trim();

					const fragment = document.createDocumentFragment();
					textContent.split(' ').forEach((word: string) => {
						const span = document.createElement('span');
						span.textContent = word; // Set the word text
						span.classList.add('word');
						fragment.appendChild(span);

						// Add a space between words, but not after the last word
						const space = document.createTextNode('\u00A0');
						fragment.appendChild(space);
					});

					element.replaceChild(fragment, node); // Replace the text node with spans
				} else if (node.nodeType === Node.ELEMENT_NODE) {
					wrapTextNodes(node); // Recursively handle nested elements
				}
			});
		};

		// Wrap text nodes in words
		wrapTextNodes(textElement);

		// Animate each word's opacity
		const words = document.querySelectorAll('.word');

		words.forEach((word, index) => {
			setTimeout(() => {
				word.classList.add('active');
			}, index * 100); // Adjust delay as needed for word-based animation
		});
	};

	// Run the typewriter effect after the component mounts
	onMount(() => {
		typeWriter();
	});
</script>

<SEO
	title={'Home'}
	description={'Welcome to the homepage of Ferenc, a passionate web developer dedicated to creating innovative and engaging websites.'}
/>

<!--  m-12 md:m-32-->
<div class="absolute top-1/2 -translate-y-1/2 md:ml-8" in:fade={{ duration: 300 }}>
	<div
		class=" solway-regular welcome-title ml-4 h-min break-words text-2xl font-light text-gray-600 md:w-1/2 md:text-5xl md:leading-relaxed dark:text-white"
	>
		Hi, I'm
		<span class="font-medium text-gray-700 dark:text-white"> Ferenc.</span> A web developer who loves
		creating innovative websites. Welcome!
	</div>

	<!--Big Social button linking to linkedin-->

	<div class="mt-8 flex w-full flex-wrap justify-center gap-4 md:justify-start">
		<a
			href="https://github.com/Ferenc02"
			class="solway-regular transition: flex w-72 items-center justify-around rounded-full bg-gray-500 py-2 text-2xl text-white shadow-md duration-300 ease-in-out hover:bg-gray-400 md:py-4"
			target="_blank"
		>
			<span class="h-max">Github</span>
			<!--Github logo-->
			<img src={githubSVG} alt="github logo" class="h-7 w-7 invert filter" />
		</a>

		<a
			href="https://www.linkedin.com/in/ferenc-s-324378244/"
			class="solway-regular transition: flex w-72 items-center justify-around rounded-full bg-blue-500 py-2 text-2xl text-white shadow-md duration-300 ease-in-out hover:bg-blue-400 md:py-4"
			target="_blank"
		>
			<span class="h-max">Linkedin</span>
			<!--Linkedin logo-->
			<img src={linkedinSVG} alt="linkedin logo" class="h-6 w-6 invert filter" />
		</a>
		<a
			href="{base}/about"
			class="solway-regular transition: flex w-72 items-center justify-around rounded-full bg-red-500 py-2 text-2xl text-white shadow-md duration-300 ease-in-out hover:bg-red-400 md:py-4"
		>
			<span class="h-max">Resume</span>
			<!--Resume logo-->
			<img src={resumeSVG} alt="resume logo" class="h-6 w-6" />
		</a>
	</div>
</div>

<style>
	@import '../reset.css';
</style>
