<script>
    import { user } from '../../../stores/store.js';
    import { enhance, applyAction } from '$app/forms';
    export let data;
    export let form;


    let name;
    let email;
    let password;
    let password2;

    let error = null;
    let nameError = false;
    let emailError = false;
    let passwordError = false;
    let password2Error = false;

    function validate() {
        nameError = !name;
        emailError = !email;
        passwordError = !password;
        
        if(!password2 || password !== password2) {
            password2Error = true;
        } else {
            password2Error = false;
        }

        return !nameError && !emailError && !passwordError && !password2Error;
    };

    async function handleSubmit(e) {
        if(validate()){
            const data = new FormData(this); 

            let response = await fetch(this.action, {
                method: this.method,
                body: data
            });

            if(response.status === 200){
                let res = await response.json();
                user.set(res.data);
                goto('/user/dashboard');
                resetForm();

            }
        }

    }

    function resetForm() {
        name = '';
        email = '';
        password = '';
        password2 = '';
    }

    $: $user && console.log($user);

</script>

<div class="content-center">    
    <div class="card">
        <div class="card-header">
            <h2>Register</h2>
        </div>
        <div class="card-content">
            <form method="POST" on:submit|preventDefault={handleSubmit} action='?/register'>
            <!-- <form method="POST" use:enhance={({form, data, action, cancel}) => {
                if(!validate()){                    
                    cancel();
                }

                return async ({ result, update }) => {
                    if(result.type === 'error'){
                        error = result.error;
                    }

                    if(result.type === 'success'){
                        error = null;
                        user.set(result.data);
                        update({ name: '', email: '', password: '', password2: '' });
                    }
                };
            }}> -->
                {#if error}<p class="error">{error.message}</p>{/if}
                <div class="form-group">
                    <label class="form-control-label">Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Name" bind:value={name}>
                    {#if nameError}<p class="error">The name field is required</p>{/if}
                </div>
                <div class="form-group">
                    <label class="form-control-label">Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Email" bind:value={email}>
                    {#if emailError}<p class="error">The email field is required</p>{/if}
                </div>
                <div class="form-group">
                    <label class="form-control-label">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password" bind:value={password}>
                    {#if passwordError}<p class="error">The password field is required</p>{/if}
                </div>
                <div class="form-group">
                    <label class="form-control-label">Confirm Password</label>
                    <input type="password" name="password2" class="form-control" placeholder="Confirm Password" bind:value={password2}>
                    {#if password2Error}<p class="error">Passwords must match.</p>{/if}
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Register</button>
                </div>
                
            </form>
            <div>
                <p>Have an account? <a href="/auth/login">Login</a></p>
            </div>
        </div>
    </div>
</div>

<style></style>