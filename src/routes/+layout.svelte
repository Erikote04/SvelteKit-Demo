<script>
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	export let data;
</script>

{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Header />
{/if}
{#if $page.data.notification}
	<p>{$page.data.notification}</p>
{/if}
welcome {data.username}
<slot />
{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Footer />
{/if}
