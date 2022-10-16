import { writable } from 'svelte/store';

const initialState = {
	todos: [
		{
			id: 1,
			title: 'Learn Svelte',
			completed: false
		},
		{
			id: 2,
			title: 'Learn Sapper',
			completed: false
		},
		{
			id: 3,
			title: 'Learn SvelteKit',
			completed: false
		}
	]
};

export const todos = writable(initialState.todos);
