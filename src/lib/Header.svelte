<script>
	import { page } from '$app/stores';
	import { goto, preloadData } from '$app/navigation';
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit Demo'}</title>
</svelte:head>

<header class="layout-header">
	<a href="/">Home</a>
	<a href="/products">Products</a>
	<a href="/address">Address</a>
	<a href="/stocks">Stocks</a>
	<a href="/news">News</a>
	
	{#if !$page.data.username}
		<a href="/login">Login</a>
	{/if}

	<button
		on:mouseover={async () => {
			await preloadData('/products');
		}}
		on:focus={async () => {
			await preloadData('/products');
		}}
		on:click={() => goto('/products')}>Goto products</button
	>
</header>

<style>
	.layout-header {
		padding: 10px;
		display: flex;
		font-size: 30px;	
		color: #e9c46a;
		background-color: #264653;
	}
	a {
		color: #e9c46a;
		text-decoration: none;
		margin: 0 20px;
	}
</style>
