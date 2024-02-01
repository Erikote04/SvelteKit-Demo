<script>
	import { page } from '$app/stores';

	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	console.log('page', $page);
</script>

{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Header />
{/if}

<slot />

{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Footer />
{/if}
