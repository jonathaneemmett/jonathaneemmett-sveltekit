<script>
	import { page } from '$app/stores';
	import '../styles/global.css';
	import Navbar from '../components/layout/Navbar.svelte';
	

	
</script>

<Navbar />
<main>
	<slot />
</main>

<style>
	main {
		max-width: 100%;
		margin: 0 auto;
	}	
</style>
