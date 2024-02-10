import Product from './Product.svelte';

export const load = async (loadEvent) => {
	const { data } = loadEvent;
	const notification = 'End of season sale!';
	return { ...data, Component: Product, notification };
};

export const ssr = true; // server-side rendering
export const csr = true; // client-side rendering
