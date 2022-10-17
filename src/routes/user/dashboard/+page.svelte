<script>
	import { onMount } from 'svelte';
    import { user } from '../../../stores/store.js';
    import { goto } from '$app/navigation';
    
    let loading = false;
    
    onMount(async () => {
        if(!$user.email){
            loading = false;
            goto('/auth/login');
        }

        loading = false;
    });

    $: !$user.email && console.log('not logged in');
</script>

{#if loading}
    <div class="loading">
        <div class="lds-ripple"><div></div><div></div></div>
    </div>
{:else}
    <div class="container">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard, {$user.email}</p>
    </div>
{/if}

<style></style>