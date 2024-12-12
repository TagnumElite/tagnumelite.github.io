<script lang="ts">
	import '../app.css';

	import Footer from './footer.svelte';
	import Header from './header.svelte';

	let { children, data } = $props();
</script>

<div class="layout">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);

		@media (min-width: 1440px) {
			padding-inline: 0;
		}

		main {
			padding-block: var(--size-9);
		}
	}
</style>
