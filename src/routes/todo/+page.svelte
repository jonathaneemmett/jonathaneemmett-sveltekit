<script>
	import { fly, fade } from 'svelte/transition';
	import TodoItem from './TodoItem.svelte';
	import { todos } from '../../stores/store';

	let addValue = '';

	let addValueError = false;

	const addTodo = () => {
		if (addValue !== '') {
			$todos = [
				...$todos,
				{
					id: $todos.length + 1,
					title: addValue,
					completed: false
				}
			];
			addValue = '';
			addValueError = false;
		} else {
			addValueError = true;
		}
	};

	const setTodoCompleted = (e) => {
		let id = e.detail;
		$todos = $todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	};

	const removeTodo = (e) => {
		let id = e.detail;
		$todos = $todos.filter((todo) => todo.id !== id);
	};
</script>

<div class="content">
	<div class="card">
		<div class="card-header">
			<h2>Todos</h2>
		</div>
		<div class="card-content">
			{#if $todos.length > 0}
				{#each $todos as todo}
					<TodoItem {todo} on:removeTodo={removeTodo} on:setTodoCompleted={setTodoCompleted} />
				{/each}
			{:else}
				<p in:fly={{ x: 200 }} out:fade={200}>No todos to do...</p>
			{/if}
		</div>
		<div class="card-footer">
			<div class="addnew">
				<input type="text" bind:value={addValue} />
				<button on:click={addTodo} class="btn"
					><img src="/add_FILL0_wght400_GRAD0_opsz20.svg" alt="" /></button
				>
			</div>
			{#if addValueError}
				<p class="error" in:fly={{ x: 200 }} out:fade={200}>An empty todo? No can do!</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 90vh;
	}

	.card {
		width: 400px;
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
	}

	.card-footer .addnew {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-footer .addnew input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		outline: none;
	}

	.btn img {
		filter: brightness(0) invert(1);
	}
</style>
