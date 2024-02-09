export const load = async ({ cookies }) => {
	const token = cookies.get('token');
	const user = { name: 'John', id: 1 };

	return {
		username: token ? user.name : null
	};
};
