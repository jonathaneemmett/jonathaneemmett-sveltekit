<script>
	import { fly, fade } from 'svelte/transition';
	import TodoItem from './TodoItem.svelte';
	import { todos } from '../../../stores/store';

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

<div class="content-center">
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
				<div class="warning" in:fly={{ x: 200 }} >No todos to do...</div>
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
				<div class="error" in:fly={{ x: 200 }}>An empty todo? No can do!</div>
			{/if}
		</div>
	</div>
	<p>This is wired up to store only with demo data. You can add, delete, and complete, but a refresh will start over.</p>
</div>

<style>

	.content-center p {
		max-width: 400px;
		text-align: center;
		padding: 1rem 0;
		font-size: .9rem;
		color: rgba(255, 219, 88, 1);
		font-weight: 600;
	}
	
	

	.card-footer .addnew {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-footer .addnew input {
		width: 100%;
		padding: 1rem;
		border: none;
		ouline: none;
	}

	.btn img {
		filter: brightness(0) invert(1);
	}
</style>
