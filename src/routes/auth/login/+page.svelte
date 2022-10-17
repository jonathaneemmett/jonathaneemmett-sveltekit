<script>
    import { user } from '../../../stores/store.js';
    import { goto } from '$app/navigation';
	import { construct_svelte_component } from 'svelte/internal';

    export let data;
    export let form;

    let email;
    let password;

    let error = null;
    let emailError = false;
    let passwordError = false;

    async function handleSubmit() {
        if(validate()){
            const data = new FormData(this); 

            let response = await fetch(this.action, {
                method: this.method,
                body: data
            });

            if(response.status === 200){
                let res = await response.json();
                console.log(res);
                user.set(res.data);
                goto('/user/dashboard');
                // resetForm();
            }
        }

    }

    async function validate() {
        let isValid = true;

        if(!email) {
            isValid = false;
            emailError = true;
        }

        if(!password) {
            isValid = false;
            passwordError = true;
        }

        return isValid;
    }

    async function resetForm() {
        email = '';
        password = '';
    }

    $: $user && console.log($user);
</script>

<div class="content-center">
    <div class="card">
        <div class="card-header">
            <h2>Login</h2>
        </div>
        <div class="card-content">
            <form method="POST" on:submit|preventDefault={handleSubmit} action='?/login'>
                {#if error}<p class="error">{error.message}</p>{/if}
                <div class="form-group">
                    <label for="email" class="form-control-label">Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Email" bind:value={email}>
                    {#if emailError}<p class="error">The email field is required</p>{/if}
                </div>
                <div class="form-group">
                    <label for="password" class="form-control-label">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password" bind:value={password}>
                    {#if passwordError}<p class="error">The password field is required</p>{/if}
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Login</button>
                </div>
            </form>
            <div>
                <p>Don't have an account? <a href="/auth/register">Register</a></p>
            </div>
        </div>
    </div>
</div>

<style></style>