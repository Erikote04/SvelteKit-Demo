export const load = async ({ cookies }) => {
	const token = cookies.get('token');

	// Simulation of getting a user
	const user = { name: 'John', id: 1 };

	return {
		username: token ? user.name : null
	};
};
