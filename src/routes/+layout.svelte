<script>
	import { page } from '$app/stores';
	import '../styles/global.css';
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';
	

	
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />
<style>
	main {
		max-width: 100%;
		margin: 0 auto;
	}	
</style>
