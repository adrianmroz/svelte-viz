<script>
	import '../app.css';
</script>

<slot />

<style>
	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: rgb(34, 39, 46);
			color: rgb(173, 186, 199);
		}
		:global(a) {
			color: inherit;
		}
	}
</style>
