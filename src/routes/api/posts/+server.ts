import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = [
		{
			slug: 'SvelteKit is great',
			content: `
            <h1>SvelteKit is great</h1>
            <p>This data came from the server</p>
          `,
		},
	];
	return json(posts);
};
