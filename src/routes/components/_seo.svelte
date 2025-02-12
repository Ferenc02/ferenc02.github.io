<script>
	import { page } from '$app/stores';

	export let title = 'Home | Ferenc02';
	export let description = 'Description of your website.';
	export let image = 'https://ferenc02.github.io/favicon.png';
</script>

<svelte:head>
	<title>{title} | Ferenc02</title>
	<meta name="description" content={description} />
	<meta property="og_site_name" content="Ferenc02.github.io" />
	<meta property="og:url" content="https://ferenc02.github.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="Ferenc02.github.io" />
	<meta property="twitter:url" content="https://ferenc02.github.io/" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{@html `  <script type="application/ld+json">
	{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title} | ",
     "url": "https://ferenc02.github.io/",
     "logo": "${image}"  }
	 </script>
	 `}
</svelte:head>
