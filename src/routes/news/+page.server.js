import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { username } = await parent();

	if (!username) {
		throw redirect(303 /*temporal redirect */, '/login');
	}
	
	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};
