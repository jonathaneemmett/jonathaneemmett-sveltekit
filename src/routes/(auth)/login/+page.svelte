<script>
    import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    export let data;
    export let form;

    
</script>

<div class="content-center">
    <div class="card">
        <div class="card-header">
            <h2>Login</h2>
        </div>
        <div class="card-content">
            <form method="POST" action='?/login' use:enhance={()=> {
                return async ({ result }) => {
                    invalidateAll();

                    await applyAction(result);
                }
            }}>
                <div class="form-group">
                    <label for="email" class="form-control-label">Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password" class="form-control-label">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password">
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