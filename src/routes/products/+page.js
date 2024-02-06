import Product from './Product.svelte';

export const load = async (loadEvent) => {
	const { data } = loadEvent;
	console.log(data)
	const notification = 'End of season sale!';
	return { ...data, Component: Product, notification };
};
