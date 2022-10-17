<script>
	import { user } from '../stores/store.js';
	import { redirect } from '@sveltejs/kit';
	import Navbar from '../lib/components/layout/Navbar.svelte';
	import '../styles/global.css';

	let isChecked;

	async function handleToggle(e) {
		isChecked = e.detail;
	};

	async function logout() {
		user.set({email: null, token: null});
		return redirect(307, '/');
	}

</script>

<header>
	<Navbar isChecked={isChecked} on:toggle={handleToggle} on:logout={logout} />
</header>
<main>
	<slot />
</main>

<style>
	main {
		max-width: 1290px;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
