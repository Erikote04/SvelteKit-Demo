import { redirect } from '@sveltejs/kit';

export const load = async ({ parent, url }) => {
	const { username } = await parent();

	if (!username) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
	
	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};
