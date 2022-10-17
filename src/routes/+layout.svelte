<script>
	import Navbar from '../lib/components/layout/Navbar.svelte';
	import '../styles/global.css';

	let isChecked;

	const handleToggle = (e) => {
		isChecked = e.detail;
	};

</script>

<header>
	<Navbar isChecked={isChecked} on:toggle={handleToggle} />
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
