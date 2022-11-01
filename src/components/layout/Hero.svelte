<script></script>


<div class="hero">
    <div class="heroContent">
        <slot />
    </div>
</div>


<style>
    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        min-height: 80vh;
        background: linear-gradient(
            rgba(21, 21, 21, 0.9), 
            rgba(21, 21, 21, 0.9)
        ),url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
    }

    .heroContent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 80vh;
        background: linear-gradient(
            rgba(21, 21, 21, 0.8), 
            rgba(21, 21, 21, 0.8)
        )
    }
</style>