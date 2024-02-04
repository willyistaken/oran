<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav>
  <!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>


  <!-- Theme -->
  <button>Toggle</button>
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
