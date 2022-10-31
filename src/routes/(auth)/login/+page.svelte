<script>
    import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    export let data;
    export let form;

    // Variables
    let email = '';
    let password = '';

    // Errors
    let emailError = false;
    let passwordError = false;

    // Functions
    function handleEmailChange(e) {
        if(e.target.value.length > 0 && e.target.value.includes('@')) {
            emailError = false;
        }
    }

    function handlePasswordChange(e) {
        if(e.target.value.length > 0) {
            passwordError = false;
        }
    }

    function validate() {
        let isValid = true;

        if(email === '' || !email.includes('@')) {
            emailError = true;
            isValid = false;
        } else {
            emailError = false;
        }

        if(password === '') {
            passwordError = true;
            isValid = false;
        } else {
            passwordError = false;
        }

        return isValid;
    }

    
</script>

<div class="content-center">
    <div class="card">
        <div class="card-header">
            <h2>Login</h2>
        </div>
        <div class="card-content">
            <form method="POST" action='?/login' use:enhance={({ cancel })=> {
                if(!validate()){
                    cancel();
                }

                return async ({ result }) => {
                    invalidateAll();

                    await applyAction(result);
                }
            }}>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" bind:value={email} on:blur={(e) => handleEmailChange(e)}>
                    {#if emailError}
                        <div class="error">Please enter a valid email address</div>
                    {/if}
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" bind:value={password} on:blur={(e) => handlePasswordChange(e)}>
                    {#if passwordError}
                        <div class="error">Please enter a password</div>
                    {/if}
                </div>
                {#if form?.invalid}
                    <div class="error">Invalid username or password.</div>
                {/if}
                <div class="form-group">
                    <button class="btn btn-primary">Login</button>
                </div>

            </form>
            <div>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    </div>
</div>

<style></style>