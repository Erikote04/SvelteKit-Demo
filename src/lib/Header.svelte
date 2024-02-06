<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit Demo'}</title>
</svelte:head>

<header class="layout-header">
	<a href="/">Home</a>
	<a href="/products" data-sveltekit-preload-data="hover">Products</a>
	<a href="/address">Address</a>
	<a href="/stocks">Stocks</a>
</header>

<style>
	a {
		color: #e9c46a;
		text-decoration: none;
		margin: 0 20px;
	}
	.layout-header {
		background-color: #264653;
		color: #e9c46a;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
