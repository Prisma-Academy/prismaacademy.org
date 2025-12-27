import { events } from '$lib/data/events';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const event = events.find((e) => e.slug === params.slug);

	if (!event) {
		throw error(404, 'Event not found');
	}

	return {
		event
	};
};
