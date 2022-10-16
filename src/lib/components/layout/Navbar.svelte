<script>
	let isChecked = false;

	const toggle = () => {
		isChecked = !isChecked;
	};

</script>

<nav class="navbar">
	<div class="logo">
		<a href="/">
			<img src="/rocket_launch_FILL0_wght400_GRAD0_opsz40.svg" alt="" />
			<h1>jonathan e. emmett</h1>
		</a>
	</div>
	<ul class="nav-links">
		<input type="checkbox" id="checkbox_toggle" bind:checked={isChecked}>
		<label for="checkbox_toggle" class="hamburger">&#9776;</label>
		<div class="menu">
			<li><a href="/" on:click={toggle}>home</a></li>
			<li><a href="/tutorials" on:click={toggle}>tutorials</a></li>
			<li><a href="/contact" on:click={toggle}>contact</a></li>
			<li class="dropdown-list">
				<a href="">user</a>
				<ul class="dropdown">
					<li><a href="/auth/login"  on:click={toggle}>login</a></li>
				</ul>
			</li>
		</div>
	</ul>
</nav>

<style>
	.navbar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: rgba(0, 0, 0, 0.2);
	}
	
	.logo a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.logo img {
		margin-right: 1rem;
		color: #fff;
		filter: brightness(0) invert(1);
	}

	.logo a h1 {
		font-size: 2rem;
	}

	/* Menu Styles */
	.menu {
		display: flex;
		gap: 1rem;
		font-size: 1rem;
	}

	.menu li {
		padding: 0 1rem;
	}

	.dropdown-list {
		position: relative;
	}

	.dropdown {
		padding: 1em 0;
		position: absolute;
		display: none;
		top: 25px;
		right: 0;
	}

	.dropdown li + li {
		margin-top: .8em;
	}

	.dropdown li {
		padding: 0.5rem 1rem;
		width: 8rem;
		text-align: center;
		background: rgba(100, 108, 255, 1);
	}

	.dropdown li a {
		color: #fff;
	}
	.dropdown li:hover {
		background: rgba(100, 108, 255, 0.3);
	}

	.dropdown-list:hover .dropdown {
		display: block;
	}

	/* Responsive Styles */
	input[type=checkbox] {
		display: none;
	}

	/* handburger menu */
	.hamburger {
		display: none;
		font-size: 36px;
		user-select: none;
	}

	/* media queries */
	@media (max-width: 768px){
		.navbar {
			background: rgba(21, 21, 21, 1);
		}
		.logo a h1 {
			font-size: 1.3rem;
		}
		.menu {
			display: none;
			position: absolute;
			margin: 1.5rem 0;
			right: 0;
			left: 0;
			text-align: left;
			padding: 1.1rem 0;
			background: rgba(21, 21, 21, 1);
			z-index: 99999;
		}

		.menu li:hover {
			display: inline-block;
			transition: 0.3s ease;
		}

		.menu li + li {
			margin-top: .8rem;
		}

		input[type=checkbox]:checked ~ .menu {
			display: block;
		}

		.hamburger {
			display: block;
		}

		.dropdown {
			left: 50%;
			top: 30%;
			transform: translateX(35%);
		}
	}
</style>
