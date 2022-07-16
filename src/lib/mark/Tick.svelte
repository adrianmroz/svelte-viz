<script lang="ts">
	export let x;
	export let y;
	export let length;
	export let color;
	export let width = 0.5;
	export let horizontal = false;
</script>

<line
	stroke={color}
	stroke-width={width}
	x1={x}
	y1={y}
	x2={horizontal ? x + length : x}
	y2={horizontal ? y : y + length}
/>
