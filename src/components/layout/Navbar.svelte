<script>
    import { page } from '$app/stores';

    function toggleMenu() {
        const menu = document.querySelector('#menu');
		menu.classList.toggle('hidden');
    };
</script>

<header>
	<nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-gray-900">
		<div>
			<a href="/" class="flex flex-wrap items-center justify-between hover:text-primary-dark">
				<h5>jonathan e. emmett</h5>
			</a>
		</div>
		<svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            on:click={() => toggleMenu()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
		  <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
			<ul class="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
				<li>
					<a href="/contact" class="md:p-4 py-2 block hover:text-primary-dark" on:click={toggleMenu}>contact</a>
				</li>
				<li>
					<a href="/tutorials" class="md:p-4 py-2 block hover:text-primary-dark" on:click={toggleMenu}>tutorials</a>
				</li>
				{#if !$page?.data?.user}
					<li><a href="/login" class="md:p-4 py-2 block hover:text-primary-dark" on:click={toggleMenu}>login</a></li>
				{:else}						
					<li>
						<form action="/logout" method="post" class="md:p-4 py-2 block hover:text-primary-dark">
							<button type="submit" class="bg-transparent border-none p-0 text-[1rem] text-primary hover:text-primary-dark ">logout</button>
						</form> 
					</li>
				{/if}
			</ul>
		  </div>
	</nav>
</header>

<style></style>