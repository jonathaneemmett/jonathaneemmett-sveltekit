<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	export let todo;

	const dispatch = createEventDispatcher();

	const setTodoCompleted = (id) => {
		dispatch('setTodoCompleted', id);
	};

	const removeTodo = (id) => {
		dispatch('removeTodo', id);
	};
</script>

<div class="todo" in:fly={{ x: 200 }}>
	<div>
		<input
			type="checkbox"
			on:click={() => setTodoCompleted(todo.id)}
			bind:checked={todo.completed}
		/>
		<span class:completed={todo.completed}>{todo.title}</span>
	</div>
	<button on:click={() => removeTodo(todo.id)}
		><img src="/close_FILL0_wght400_GRAD0_opsz20.svg" alt="" /></button
	>
</div>

<style>
	.todo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.todo input {
		margin-right: 1rem;
	}

	.todo span {
		font-size: 1rem;
		line-height: 25px;
	}

	.todo button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.todo button img {
		cursor: pointer;
		filter: brightness(0) invert(1);
	}

	.todo button img:hover {
		filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%)
			contrast(117%);
	}

	.completed {
		color: green;
		text-decoration: line-through;
	}
</style>
