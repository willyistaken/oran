<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
    import Content from './+page.svelte'
	import Hack from './hackmd.svelte'
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
</script>
<html class='light' lang="en">

<div class="layout">
  <!-- Header -->
	<Header />

	<main>
		<Hack/>
	</main>

  <!-- Footer -->
	<Footer />
</div>
</html>
<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
