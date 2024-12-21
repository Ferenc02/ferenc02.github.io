import fs from 'fs';
import path from 'path';
import type { RequestHandler } from '@sveltejs/kit';
import { base } from '$app/paths';

export const prerender = true;

export const GET: RequestHandler = async () => {
	//const staticDir = path.join(process.cwd(), 'static/projects/Nature-Of-Code');
	//const staticDir = path.resolve(`${base}/projects/Nature-Of-Code`);
	const staticDir = path.resolve(`static/projects/Nature-Of-Code`);

	try {
		// Read the static directory and filter only folders
		const folders = fs
			.readdirSync(staticDir, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name);

		// Return the folder names as a JSON response
		return new Response(JSON.stringify(folders), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to read folders' }), { status: 500 });
	}
};
