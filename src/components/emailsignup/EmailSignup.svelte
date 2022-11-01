<script>
    import { enhance } from '$app/forms';
	import { loop_guard } from 'svelte/internal';
    let email = '';

    // Error handling
    let emailError = false;

    function validate() {
        let isValid = true;

        if (!email) {
            emailError = true;
            isValid = false;
        } else {
            emailError = false;
        }

        return isValid;
    }
</script>

<div class="emailSignup">
    <div class="formGroup">
        <form action="?/emailsignup" method="POST" use:enhance={({ cancel }) => {
            if(!validate()){
                cancel();
            }
        }}>
            <input type="email" name="email" id="email" placeholder="Sign up" bind:value={email} disabled>
            <button type="submit">Submit</button>
        </form>
    </div>

    {#if emailError}
        <span class="message-error">Please enter a valid email address</span>
    {:else}
        <span class="message">Your email address will never be sold or shared. Opt out anytime.</span>
    {/if}
    
</div>

<style>
    .emailSignup {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        background: #151515;
    }

    .formGroup form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 500px;
    }

    input {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 5px 0 0 5px;
        font-size: 1.5rem;
        color: #151515;
        background: #fff;
    }

    button {
        padding: 1rem;
        border: none;
        border-radius:0 5px 5px 0;
        font-size: 1.5rem ;
        color: rgba(255, 219, 88, 1);
        background: rgba(100, 108, 255, 1);
        cursor: pointer;
    }

    .message {
        margin-top: 1rem;
        font-size: .8rem;
        color: #fff;
    }

    .message-error {
        margin-top: 1rem;
        font-size: .8rem;
        color: red;
    }
</style>