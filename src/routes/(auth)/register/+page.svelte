<script>
    import { enhance } from '$app/forms';
    export let form;
    export let data;


</script>

<div class="content-center">    
    <div class="card">
        <div class="card-header">
            <h2>Register</h2>
        </div>
        <div class="card-content">
            <form method="POST" action='?/register' use:enhance>
                <div class="form-group">
                    <label class="form-control-label">Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Name" >
                </div>
                <div class="form-group">
                    <label class="form-control-label">Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Email" >
                </div>
                <div class="form-group">
                    <label class="form-control-label">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password" >
                </div>
                <div class="form-group">
                    <label class="form-control-label">Confirm Password</label>
                    <input type="password" name="password2" class="form-control" placeholder="Confirm Password" >
                </div>
                {#if form?.user}
                    <div class="error">Email is already in use.</div>
                {/if}
                <div class="form-group">
                    <button class="btn btn-primary">Register</button>
                </div>
                
            </form>
            <div>
                <p>Have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    </div>
</div>

<style></style>