// src/hooks.server.ts
import { fetch } from 'undici';

export async function handle({ event, resolve }) {
	const response = await fetch('/api/folders');
	const projectIds = await response.json();

	if (event.url.pathname === '/') {
		event.prerender.entries.push(...projectIds.map((id) => `/projects/${id}`));
	}

	return resolve(event);
}
