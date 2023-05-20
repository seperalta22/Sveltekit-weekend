//this file is used to fetch the data from the database and send it to the client side

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	//get posts from api

	const post = {
		slug: 'SvelteKit is great',
		content: `
	        <h1>SvelteKit is great</h1>
	        <p>This data came from the server</p>
	      `,
	};

	// const post = fetch(
	// 	'http://localhost:5173/api/posts/SvelteKit%20is%20great'
	// ).then((res) => res.json());
	return { post };
};
