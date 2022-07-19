<script lang="ts">
	export let x1;
	export let x2;
	export let y1;
	export let y2;
	export let width = 0.5;
</script>

<line stroke="currentColor" stroke-width={width} {x1} {y1} {x2} {y2} />
